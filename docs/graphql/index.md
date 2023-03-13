# GraphQL

GraphQL is a query language for APIs and can provide some nice benefits over a traditional REST API.  Sometimes you only need to access a few fields and in that situation it would be very wasteful to pull an entire dataset.  A query in GraphQL lets you specify the pieces of data that you want which greatly reduces the time and bandwidth consumed during a request.

## Enabling GraphQL Support

Coilpack ships with the GraphQL integration disabled by default.  If you would like to use GraphQL you will need to update your config file at `config/coilpack.php` to look like this:

```php
return [
    ...
    'graphql' => [
        'enabled' => true
    ]
    ...
];
```

## Tools

You can interact with your site's GraphQL endpoints by using the built-in GraphiQL tool at `/graphiql`.  Once GraphQL is enabled this endpoint is available by default.  However you may wish to disable this endpoint once your site is deployed to production.

Alternatively we recommend using [GraphQL Playground](https://github.com/graphql/graphql-playground) or [Insomnia](https://insomnia.rest/) to test your queries.

## Add-on Developers

If you are developing an Add-on for ExpressionEngine and would like to support GraphQL please refer to our [Add-ons documentation](../advanced/addons/graphql).









