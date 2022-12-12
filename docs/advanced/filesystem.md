# Filesystem

Coilpack provides you with a Laravel storage disk called 'coilpack' that is rooted on the path of your ExpressionEngine installation.

You can access this disk through Laravel's Storage facade:

```php
Storage::disk('coilpack')->exists('index.php')
```

Check out Laravel's documentation for more information on the [Laravel Filesystem](https://laravel.com/docs/9.x/filesystem).