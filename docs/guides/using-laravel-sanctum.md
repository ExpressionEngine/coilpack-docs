# Using Laravel Sanctum

This guide will help you setup [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum) authentication for your ExpressionEngine Members.  For simplicity's sake this guide assumes that you have already [installed Coilpack](../getting-started.md).

## Database Setup

When you install Sanctum it will create additional database tables to store access tokens. So it is important to make sure the default database connection is properly configured.  You can use the Laravel 11 default choice of `sqlite` or any other available connection.

If you wish to use the same MySQL database that ExpressionEngine is using we recommend that you give Laravel's database tables their own prefix that will not conflict with your ExpressionEngine table prefix (usually `exp_`). The database table prefix can be set in the `config/database.php` file.

## Install Laravel Sanctum

Recent versions of Laravel include Sanctum however if you're running an older version you may need to follow a [different set of instructions](https://laravel.com/docs/10.x/sanctum#installation).  For our example we're using Laravel 11 and we can simply run `php artisan install:api`.  Once the files are published you will be asked if you want to run pending database migrations which you should respond to with `yes`.

## Create a Custom Member Model

In order to use Sanctum with our ExpressionEngine models we need to create a [Custom Member Model](../advanced/authentication.md#custom-member-model) and add the `HasApiTokens` trait.

```php artisan make:model Member```

Replace the contents with the following code which adds the necessary `HasApiTokens` trait from Sanctum.  This code also updates the definition for the `tokens` relationship to set the database connection to Laravel's default instead of the `coilpack` connection used by the Member model.

```php
<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Expressionengine\Coilpack\Models\Member\Member as BaseMember;

class Member extends BaseMember
{
    use HasApiTokens;

    /**
     * Get the access tokens that belong to model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function tokens()
    {
        return $this->setConnection(config('database.default'))->morphMany(\Laravel\Sanctum\Sanctum::$personalAccessTokenModel, 'tokenable');
    }
}
```

Now we can configure Coilpack to use our new Member model that integrates with Laravel Sanctum. Change the `member_model` setting in your Coilpack config file to reference the new model class.

```php
    # config/coilpack.php
    return [
    ...
    'member_model' => \App\Models\Member::class,
    ...
    ];
```

## Configure Laravel Sanctum

By default Sanctum uses the `web` guard to do all authentication.  We need to change the configuration to add the `coilpack` guard as well.

```php
# config/sanctum.php
return [
    ...
    'guard' => ['web', 'coilpack'],
    ...
];
```

## Adding Routes

The following routes can be added to your Laravel application in `routes/web.php`.

**Login**

When Sanctum encounters an unauthenticated user it will send them to a route named `login`.  The following code will setup a route that redirects to the ExpressionEngine control panel (or you can link to a custom login template instead).

```php
Route::get('login', function () {
    return redirect(config('coilpack.admin_url'));
})->name('login');
```

:::note
The `login` route is typically provided by Laravel's authentication scaffolding so if you're using that you can skip this step.
:::

**Current User**

Retrieve the authenticated user from Sanctum.

```php
Route::middleware('auth:sanctum')->get('/user', function (Illuminate\Http\Request $request) {
    return $request->user();
});
```

**Create Token**

If you want to use Sanctum for [token based authentication](https://laravel.com/docs/11.x/sanctum#api-token-authentication) you can add this route to handle token creation.

```php
Route::middleware('auth:coilpack')->post('/tokens/create', function (Illuminate\Http\Request $request) {
    $token = $request->user('coilpack')->createToken($request->token_name);

    return ['token' => $token->plainTextToken];
});
```

## Laravel Sanctum Documentation

For more information please reference the [Laravel Sanctum documentation](https://laravel.com/docs/11.x/sanctum).