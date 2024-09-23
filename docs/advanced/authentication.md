# Authentication

Coilpack comes with it's own Authentication Guard for Laravel so that you can retrieve the active ExpressionEngine Member as an Eloquent model with the following code:

```php
auth('coilpack')->user()
```

## Defaults

We are not making any assumptions about your setup and so the `'coilpack'` guard is set up as an additional guard and not the default.  However if you only plan on using ExpressionEngine's authentication you can change your default guard by editing your Laravel application's `config/auth.php` to look like this:

```php
...
    'defaults' => [
        'guard' => 'coilpack',
        'passwords' => 'users',
    ],
...
```

This can simplify your authentication calls to look like the standard `auth()->user()`.

For more information on [Laravel's Authentication](https://laravel.com/docs/9.x/authentication) capabilities please review their documentation.

## Custom Member Model

The Eloquent model used by Coilpack's authentication guard can be extended to add functionality and other customizations.

Instead of starting with a blank Eloquent model we recommend that you extend the included Member model `Expressionengine\Coilpack\Models\Member\Member`

Your custom model might look like this:
```php
# app/Models/Member.php
<?php

namespace App\Models;

use Expressionengine\Coilpack\Models\Member\Member as BaseMember;

class Member extends BaseMember
{

}
```

Coilpack doesn't know about this custom model until you update the `member_model` setting in your `config/coilpack.php`.

```php
    # config/coilpack.php
    return [
    ...
    'member_model' => \App\Models\Member::class,
    ...
    ];
```