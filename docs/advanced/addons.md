# Add-ons

Add-ons are a big part of what makes ExpressionEngine a versatile content management system.  While Coilpack tries to interface with the standard code in an Add-on it may be desirable to augment this interaction.

Learn more about developing [ExpressionEngine Add-ons](https://docs.expressionengine.com/latest/add-ons/overview.html)

## Templating Behavior

Coilpack does some magic behind the scenes to make existing ExpressionEngine add-on code compatible with the new templating engines.  Depending on the add-on this approach will fall somewhere in the spectrum of working perfectly well or not at all.  If the magic is not working for you do not fear, you can provide your own handlers to tell Coilpack what to do when it encounters your [tags](./addons/tags) or [fieldtypes](./addons/fieldtypes).


## Supporting GraphQL

In order to fully support GraphQL you will need to implement custom handlers for your Add-on's tags and/or fieldtypes.  This is just due to the nature of PHP and consequently ExpressionEngine being loosely typed while GraphQL has a strongly typed schema.  [Learn more about supporting GraphQL in your Add-on](./addons/graphql).


## Checking for Coilpack

Sometimes you may want to load or register services specifically for Coilpack interactions. This can be accomplished by
checking if Coilpack is registered on the `ee()` object.


```php
if (ee()->has('coilpack')) {
    // Coilpack specific code
}
```

## Registering Custom Files

Once you have created your Coilpack specific classes you will need to register them so Coilpack can use them.
We recommend doing this in your add-on's setup file (addon.setup.php) by adding a new `coilpack` section like this:

```php
return array(
    'name'           => 'Addon Name'
    'description'    => 'Addon Description'
    ...
    'coilpack' => [
        'tags' => [
            'tagname' => 'Addon\Tags\TagName'
        ],
        'fieldtypes' => [
            'super_checkbox' => 'Addon\Fieldtypes\SuperCheckbox'
        ]
    ]
);
```

Alternatively if you need more control you can also register tags and fieldtypes like this:

```php
if (ee()->has('coilpack')) {
    ee()->coilpack->registerTag('addon.tagname', 'Addon\Tags\TagName');
    ee()->coilpack->registerFieldtype('super_checkbox', 'Addon\Fieldtypes\SuperCheckbox');
}
```