# Tags

In order to support a variety of templating engines Coilpack has to modify how template tags are processed to extract structured data instead of a processed string.

## Default Behavior

When a template tag is encountered we look to see if there is a custom implementation defined for the tag.  If there is we stop and pass everything through to that class.  When there is no custom tag we isolate the ExpressionEngine template library and use an overloaded version that allows us to capture variables from the Add-on when a `parse_variables` or `parse_variables_row` call is made.  There is also a new method on the ExpressionEngine Template library that lets developers explicitly set the data for the tag - `ee()->TMPL->set_data($data)`.

Priority Order:

1. Output from Custom Template Tag Handler
2. Variables passed to the Template Library using `set_data()`
3. Variables passed to the Template Library using `parse_variables()`
4. Variables passed to the Template Library using `parse_variables_row()`
5. Output from the Add-on's `tag_name()` method

## Recommendations

If your Template Tags are not working well with Coilpack we recommend you first consider using `set_data()`.  If you are preparing an array of variables and then doing string replacement on the Template's tagdata this may be a very simple change.  It may also be worth refactoring your tag code to build an array of variables to pass along to Coilpack and then loop over it to replace ExpressionEngine's tagdata.

Since `set_data()` was added to the Template Library in ExpressionEngine version 7.2.1 you may want to wrap calls to it with a conditional like this:

```php
if(method_exists(ee()->TMPL, 'set_data')) {
    ee()->TMPL->set_data($data);
}
```

## Custom Template Tags

If your addon provides template tags but you would like to provide a custom implementation for Coilpack you can!  You will need to create a new class for your Tag which should extend `Expressionengine\Coilpack\View\Tag`.

There are also a few other base Tag classes used internally by Coilpack and available for your use:

- `Expressionengine\Coilpack\View\ModelTag` provides some conveniences for a Tag that wraps an Eloquent model.
- `Expressionengine\Coilpack\View\FormTag` can help you get started with a Tag that renders an HTML form.
- `Expressionengine\Coilpack\View\AddonTag` can be used to keep the default behavior for processing your tag but allows you to add additional information like GraphQL type support

Here is a simplified example:

```php
<?php

namespace Addon\Tags;

use Expressionengine\Coilpack\View\Tag;

class TagName extends Tag
{

    public function run()
    {
        return 'test';
    }
}
```

## Defining Parameters

You can add support for parameters on your custom tag by adding a `defineParameters()` method.  This method should return an array of Parameters that will be incorporated as inputs for your GraphQL query.

```php
    public function defineParameters(): array
    {
        return [
            new Expressionengine\Coilpack\Support\Parameter([
                'name' => 'author_id',
                'type' => 'string',
                'description' => 'Limit the entries to the specified Member ID',
            ]),
        ];
    }
```

## Registering Your Tag

Once you have created a custom Tag you will need to register it with Coilpack.
We recommend doing this in your add-on's setup file (addon.setup.php) within a `coilpack` section like this:

```php
return array(
    'name'           => 'Addon Name'
    'description'    => 'Addon Description'
    ...
    'coilpack' => [
        'tags' => [
            'tagname' => 'Addon\Tags\TagName'
        ]
    ]
);
```

Alternatively if you need more control you can also register your tag like this:

```php
if (ee()->has('coilpack')) {
    ee()->coilpack->registerTag('addon.tagname', 'Addon\Tags\TagName');
}
```