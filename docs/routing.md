# Routing

Coilpack works by bootstrapping ExpressionEngine inside of a Laravel application.  This is important to keep in mind when thinking about how a request to your site is handled.  The Laravel application handles the request by first checking if it matches a Laravel route.  You may see the defined routes for your application by running `php artisan route:list`.  If the request does not match a Laravel route Coilpack will pass it along to ExpressionEngine and it will be routed according to your site's templates and route definitions.  Learn more about [ExpressionEngine's URL Structure](https://docs.expressionengine.com/latest/general/url-structure.html).

## Special Routes

Coilpack sets up a few special routes for you:

- `/admin.php` - Access the ExpressionEngine Control Panel
- `/graphql` - GraphQL Data endpoint when [GraphQL is enabled](./graphql#enabling-graphql-support)
- `/graphiql` - Interactive GraphQL testing endpoint when [GraphiQL is enabled](./graphql#tools)

## Asset Handling

Because your ExpressionEngine install does not (and should not) be in Laravel's `public` folder all requests to assets in your site will end up being routed through Coilpack.  This means that your webserver should be configured to send all requests through Laravel's `public/index.php` if the request does not match a file.

## Middleware

When Coilpack is installed you are automatically given access to new middleware in your Laravel application.  Check out the documentation to learn more about [Laravel Middleware](https://laravel.com/docs/9.x/middleware).

### Member with Role

The `member_with_role` middleware can be used to restrict access to a route unless the member is logged in and belongs to one of the roles specified in the middleware parameters.

**Example Usage**:

Restricting a route to ExpressionEngine Members with a Super Admin or Admin role.

```php
Route::get('admins', function() {
    echo 'hello admins!';
})->middleware('member_with_role:super_admin,admin');
```

### Member with Permission

The `member_with_permission` middleware is used in a similar way to restrict access to a route unless the member is logged in and has one of the specified permissions.

**Example Usage**:

Restricting a route to ExpressionEngine Members with permission to search and view profiles.

```php
Route::get('search', function() {
    echo 'hello!';
})->middleware('member_with_permission:can_search,can_view_profiles');
```

### Alternate Registration:

If you wish to register these middleware under different names you can do so in your `app/Http/Kernel.php` file like so:

```php
protected $routeMiddleware = [
    ...
    'member_role' => \Expressionengine\Coilpack\Middleware\MemberWithRole::class,
    'member_permission' => \Expressionengine\Coilpack\Middleware\MemberWithPermission::class,
    ...
];
```
