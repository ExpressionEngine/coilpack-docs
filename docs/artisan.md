# Artisan Commands

Laravel comes with a powerful command line interface called [Artisan](https://laravel.com/docs/11.x/artisan). Coilpack provides additional functionality for Artisan to help you setup and interact with your ExpressionEngine installation.

## Available Commands


### Setup Coilpack

```php
php artisan coilpack
```

This command will walk you through [connecting ExpressionEngine with your Laravel application](./getting-started.md).

### Manage GraphQL

```php
php artisan coilpack:graphql --generate-token
```

This command will help [secure your GraphQL endpoint](./graphql/index.md#securing-your-graphql-endpoint) by generating a token for the `COILPACK_GRAPHQL_TOKEN` variable in your environment file.

### ExpressionEngine CLI

```
php artisan eecli
```

This command serves as a proxy to [ExpressionEngine's Command Line Interface](https://docs.expressionengine.com/latest/cli/intro.html).  It is necessary to use this proxy if you wish to take advantage of Laravel code (environment/config variables, etc...) within an ExpressionEngine Command.

In most cases you call the ExpressionEngine command in an identical manner just substitute `php artisan eecli` for `php eecli.php`.  For example you can run an ExpressionEngine update by issuing this command `php artisan eecli update`.

:::caution
There are some differences between commands in ExpressionEngine and Laravel.  For instance option shortcuts can only be a single letter in Artisan commands where an ExpressionEngine Command does not have this restriction.
:::