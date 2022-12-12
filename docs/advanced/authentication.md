# Authentication

Coilpack comes with it's own Authentication Guard for Laravel so that you can retrieve the active ExpressionEngine member as an Eloquent Model with the following code:

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