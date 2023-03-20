# GraphQL

GraphQL is a query language for APIs and can provide some nice benefits over a traditional REST API.  Sometimes you only need to access a few fields and in that situation it would be very wasteful to pull an entire dataset.  A query in GraphQL lets you specify the pieces of data that you want which greatly reduces the time and bandwidth consumed during a request.

## Enabling GraphQL Support

Coilpack ships with the GraphQL integration disabled by default.  If you would like to use GraphQL you can add `COILPACK_GRAPHQL_ENABLED=true` to your Laravel `.env` file

## Securing your GraphQL Endpoint

It is recommended that you secure your GraphQL endpoint in a production environment so authentication is required by default.  You can use the command `php artisan coilpack:graphql --generate-token` to create a token and save it to your `.env` file.  This token should be sent as an authorization header with any requests to the `/graphql` endpoint like this `Authorization: Bearer {COILPACK_GRAPHQL_TOKEN}`.

## Configuration

The GraphQL integration's behavior can be configured in the `config/coilpack.php`.

```php
...
    /**
     * Settings to control the behavior of the built-in GraphQL integration
     */
    'graphql' => [
        /**
         * Flag to enable the GraphQL API route at /graphql
         */
        'enabled' => env('COILPACK_GRAPHQL_ENABLED', false),

        /**
         * Flag to enable the Graphiql interactive GraphQL explorer at /graphiql
         * Note that in order to use this tool you must also enable graphql above
         */
        'graphiql' => env('COILPACK_GRAPHIQL_ENABLED', false),

        /**
         * Flag to set the 'coilpack' schema as your default schema
         */
        'is_default_schema' => true,

        /**
         * Settings to control how requests to the GraphQL API should be authenticated
         */
        'auth' => [
            /**
             * Flag to control whether or not authentication is enabled
             */
            'enabled' => env('COILPACK_GRAPHQL_AUTH_ENABLED', true),

            /**
             * The driver that should be used for authenticating requests
             *
             * Supported drivers: 'token'
             */
            'driver' => env('COILPACK_GRAPHQL_AUTH_DRIVER', 'token'),

            /**
             * When using the 'token' driver it will be stored here
             */
            'token' => env('COILPACK_GRAPHQL_TOKEN', null),
        ],
    ],
...
```

## Tools

You can interact with your site's GraphQL endpoints by using the built-in GraphiQL tool at `/graphiql`.  Once GraphQL is enabled this endpoint is available by default.  However you may wish to disable this endpoint once your site is deployed to production.

Alternatively we recommend using [GraphQL Playground](https://github.com/graphql/graphql-playground) or [Insomnia](https://insomnia.rest/) to test your queries.

## Add-on Developers

If you are developing an Add-on for ExpressionEngine and would like to support GraphQL please refer to our [Add-ons documentation](../advanced/addons/graphql).









