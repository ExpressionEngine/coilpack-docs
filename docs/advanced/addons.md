# Add-ons

Add-ons are a big part of what makes ExpressionEngine a versatile content management system.  While Coilpack tries to interface with the standard code in an Add-on it may be desirable to augment this interaction.

Learn more about developing [ExpressionEngine Add-ons](https://docs.expressionengine.com/latest/add-ons/overview.html)

## Default Behavior

Coilpack does some magic behind the scenes to make existing ExpressionEngine add-on code compatible with the new templating engines.  Depending on the add-on this approach will fall somewhere in the spectrum of working perfectly well or not at all.  If the magic is not working for you do not fear, you can provide your own handlers to tell Coilpack what to do when it encounters your tags or fieldtypes.

How it works:

When a template tag is encountered we look to see if there is a custom handler defined for the tag.  If there is we stop and pass everything through to that handler.  When there is no custom handler defined we isolate the ExpressionEngine template library and use an overloaded version that allows us to capture variables from the add-on when a `parse_variables` or `parse_variables_row` call is made.  There is also a new method on the ExpressionEngine Template library that lets developers explicitly set the data for the tag.  `ee()->TMPL->set_data($data)`

Priority Order:

1. Output from Custom Template Tag Handler
2. Variables passed to the Template Library using `set_data()`
3. Variables passed to the Template Library using `parse_variables()`
4. Variables passed to the Template Library using `parse_variables_row()`
5. Output from the Add-on's `replace_tag()` method

## Recommendations

If your Template Tags are not working well with Coilpack we recommend you first consider using `set_data()`.  If you are preparing an array of variables and then doing string replacement on the Template's tagdata this may be a very simple change.  It may also be worth refactoring your tag code to build an array of variables to pass along to Coilpack and then loop over it to replace ExpressionEngine's tagdata.

Since `set_data()` was added to the Template Library in ExpressionEngine version 7.2.1 you may want to wrap calls to it with a conditional like this:

```php
if(method_exists(ee()->TMPL, 'set_data')) {
    ee()->TMPL->set_data($data);
}
```


## Custom Template Tags

If your addon provides template tags and you would like to provide a custom implementation for Coilpack you can!  The following code shows how you can check if Coilpack is enabled and when it is register a new tag handler.

```php
if (ee()->has('coilpack')) {
    ee()->coilpack->registerTag('addon.tagname', 'Addon\Tags\TagName');
}
```

The Tag class should extend `Expressionengine\Coilpack\View\Tag`.  There are also two other base Tag classes used internally by Coilpack and available for your use.  They are `Expressionengine\Coilpack\View\ModelTag` which provides some conveniences for a Tag that wraps an Eloquent model.  And `Expressionengine\Coilpack\View\FormTag` which can help get you started with a tag that renders an HTML form.

Here is an example:

```php
<?php

namespace Addon\Tags;

use Expressionengine\Coilpack\View\Tag;

class TagName extends Tag
{

    public function process()
    {
        return 'test';
    }
}
```


## Custom Fieldtypes

Similarly, it is also possible to handle the display of your Add-on's fieldtype data differently when it is referenced in Coilpack.

```php
if (ee()->has('coilpack')) {
    ee()->coilpack->registerFieldtype('super_checkbox', 'Addon\Fieldtypes\SuperCheckbox');
}
```

The fieldtype class should extend `Expressionengine\Coilpack\Fieldtypes\Fieldtype`

Here is an example:

```php
<?php

namespace Addon\Fieldtypes;

use Expressionengine\Coilpack\Fieldtypes\Fieldtype;
use Expressionengine\Coilpack\FieldtypeOutput;
use Expressionengine\Coilpack\Models\FieldContent;

class SuperCheckbox extends Fieldtype
{

    public function apply(FieldContent $content)
    {
        return FieldtypeOutput::make('test');
    }
}
```

## Using Add-on Setup Data

You can also register Coilpack specific classes in your add-on's setup data like this:

```php
return array(
    'name'           => 'Addon Name'
    'description'    => 'Addon Description'
    ...
    'coilpack' => [
        'tags' => [
            'addon.tagname' => 'Addon\Tags\TagName'
        ],
        'fieldtypes' => [
            'super_checkbox' => 'Addon\Fieldtypes\SuperCheckbox'
        ]
    ]
);
```