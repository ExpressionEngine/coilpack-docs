# Fieldtypes


## Default Behavior

When a field is being rendered we look to see if there is a custom implementation defined for the fieldtype.  If there is we stop and pass parameters along to that class.  When there is no custom fieldtype we isolate the ExpressionEngine template library and use an overloaded version that allows us to capture variables from the Add-on when a `parse_variables` or `parse_variables_row` call is made.  There is also a new method on the ExpressionEngine Template library that lets developers explicitly set the data for the tag - `ee()->TMPL->set_data($data)`.

Priority Order:

1. Output from Custom Fieldtype Class
2. Variables passed to the Template Library using `set_data()`
3. Variables passed to the Template Library using `parse_variables()`
4. Variables passed to the Template Library using `parse_variables_row()`
5. Output from the Add-on's `replace_tag()` method

## Custom Fieldtypes

It is also possible to handle the display of your Add-on's fieldtype data differently when it is referenced in Coilpack.

You can create a new fieldtype class which should extend `Expressionengine\Coilpack\Fieldtypes\Fieldtype`

Here is an example:

```php
<?php

namespace Addon\Fieldtypes;

use Expressionengine\Coilpack\Fieldtypes\Fieldtype;
use Expressionengine\Coilpack\FieldtypeOutput;
use Expressionengine\Coilpack\Models\FieldContent;

class SuperCheckbox extends Fieldtype
{

    public function apply(FieldContent $content, array $parameters = [])
    {
        return FieldtypeOutput::make('test');
    }
}
```

## Defining Parameters

Typically a fieldtype doesn't need to define parameters up front as they are evaluated dynamically and checked for values at runtime.  If you would like to support GraphQL with your fieldtype it is important to list out your parameters so the schema can be generated properly.

Coilpack provides a method `parameters()` for defining which parameters your fieldtype supports.  This method will also pass along the field using the fieldtype so you can generate parameters specifically for it.  However, this should only be necessary for more complicated fieldtypes like Grid.

```php
    use Expressionengine\Coilpack\Contracts\Field;

    ...

    public function parameters(Field $field = null): array
    {
        return [
            new Expressionengine\Coilpack\Support\Parameter([
                'name' => 'format',
                'type' => 'string',
                'description' => 'Specify the format for this fieldtype',
            ]),
        ];
    }
```

## Defining Modifiers

Modifiers provide a way to alter the output of your fieldtype and can handle a different set of input by specifying parameters.  Because they can define their own parameters Coilpack provides a way to define your fieldtype modifiers prior to runtime.  It is necessary for GraphQL support to have this information prior to generating the schema.  You can add Modifiers to your custom fieldtype by implementing a `defineModifiers()` method on your class.

```php
    public function defineModifiers(): array
    {
        return [
            new Expressionengine\Coilpack\Fieldtypes\Modifier($this, [
                'name' => 'transform',
                'description' => 'Perform a transformation',
                'parameters' => new Expressionengine\Coilpack\Support\Parameter([
                    'name' => 'name',
                    'type' => 'string',
                    'description' => 'Transformation name',
                ]),
            ]),
        ];
    }
```


## Registering Your Fieldtype

Once you have created a custom Fieldtype you will need to register it with Coilpack.
We recommend doing this in your add-on's setup file (addon.setup.php) within a `coilpack` section like this:

```php
return array(
    'name'           => 'Addon Name'
    'description'    => 'Addon Description'
    ...
    'coilpack' => [
        'fieldtypes' => [
            'super_checkbox' => 'Addon\Fieldtypes\SuperCheckbox'
        ]
    ]
);
```

Alternatively if you need more control you can also register your fieldtype like this:

```php
if (ee()->has('coilpack')) {
    ee()->coilpack->registerFieldtype('super_checkbox', 'Addon\Fieldtypes\SuperCheckbox');
}
```


use Expressionengine\Coilpack\Contracts\ListsGraphType;