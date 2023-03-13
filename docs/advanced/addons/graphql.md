# GraphQL

GraphQL is a large topic that is outside the scope of this documentation.  However there are some great resources available for learning the fundamentals.  Here are some links to reference materials for libraries used by Coilpack to implement the GraphQL specification.

- [Official Documentation](https://graphql.org/learn/)
- [GraphQL Guide Book](https://github.com/GraphQLGuide/book)
- [PHP GraphQL Library](https://webonyx.github.io/graphql-php/)
- [Laravel GraphQL Wrapper](https://github.com/rebing/graphql-laravel#usage)

Adding GraphQL support for your Add-on will require some extra configuration and code.  There are several ways to go about making your Add-on accessible through GraphQL.

## Fieldtypes

By default every Fieldtype will be setup as a 'string' type in GraphQL.  If you wish to change that for your Fieldtype you will need to [create a custom Fieldtype class](./fieldtypes#custom-fieldtypes) and override the `graphType()` method:

```php
    /**
     * The GraphQL Type that represents this Fieldtype
     *
     * @return Rebing\GraphQL\Support\Type|string
     */
    public function graphType()
    {
        return \GraphQL\Type\Definition\Type::string();
    }
```

Along with assigning an output type for your fieldtype you may want to add support for input by defining [parameters](./fieldtypes#defining-parameters) and [modifiers](./fieldtypes#defining-modifiers).

## Tags

The simplest way to add GraphQL support for your tag is by [creating a custom Tag class](./tags#custom-template-tags) for Coilpack.

From there you can implement the `Expressionengine\Coilpack\Contracts\ConvertsToGraphQL`
interface and Coilpack will automatically register a query based on your tag with a name like `exp_addon_tagname`.

The `ConvertsToGraphQL` interface requires that you implement a `toGraphQL()` method that must return an array containing a Type definition.  You may also add your Type to the GraphQL type registry here or as part of your [Add-on's setup file](#registering-graphql-classes).

For example:

```php
    ...
    public function toGraphQL(): array
    {
        // Register your type here or in addon.setup.php
        \Expressionengine\Coilpack\Facades\GraphQL::addType($type, 'MyAddonTagType');

        return [
            'type' => GraphQL::type('MyAddonTagType'),
            /*
            'resolve' => function($arguments) {
                return $this->arguments($arguments)->run();
            }
            */
        ];
    }
    ...
```

You can also define a different `resolve()` function in the `toGraphQL()` return array.  The above example shows what will happen by default on your Tag, any arguments sent to the GraphQL query will be passed to your tag and then the `run()` method will be called.


## GraphQL Type

You will need to create a new class to represent the return type for your query.

```php
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class MyAddonTagType extends GraphQLType {

    protected $attributes = [
        'name' => 'MyAddonTagType',
        'description' => 'A description of the type',
    ];

    public function fields(): array
    {
        return [
            'field_name' => [
                'type' => Type::string()
            ]
        ];
    }
}
```

To add support for handling input on your tag you can [define parameters](./tags#defining-parameters).


## Registering GraphQL Classes

We recommend registering any GraphQL queries and types within the `coilpack` section of your add-on's setup file (addon.setup.php) like this:

```php
return array(
    'name'           => 'Addon Name'
    'description'    => 'Addon Description'
    ...
    'coilpack' => [
        'tags' => [...],
        'fieldtypes' => [..],
        'graphql' => {
            'types' => [
                'MyAddonTagType' => MyAddonNamespace\Types\MyAddonTagType::class
            ],
            'queries' => [
                'query_name' => MyAddonNamespace\Queries\MyAddonQuery::class
            ]
        }
    ]
);
```
