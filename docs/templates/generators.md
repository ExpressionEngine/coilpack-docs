# Template Generators

Coilpack expands support for [ExpressionEngine's Template Generator](https://docs.expressionengine.com/latest/templates/generators.html) feature to include the Twig and Blade templating engines.  This is accomplished by providing translations of ExpressionEngine's native template and fieldtype stubs.

## Usage

### Control Panel

The Channel and Field Manager display a shortname next to each item's title which you can click to copy example template code.  This code will be generated using the site's [default template engine](/configuration#default-template-engine).  If not specified this will use the Native Template Language so be sure to change this if you wish to copy code in Twig or Blade.

:::warning
Due to security restrictions in modern browsers copying code via the shortname is only supported when on HTTPS.
:::

When using Coilpack you will also notice that the `Developer > Templates > Template Generator` page will have an extra option for "Template Engine".  You can select from the available options and the generated templates will use the proper syntax for your specified engine.

:::info
If you generate a template that is missing a translated stub (perhaps a third-party fieldtype) ExpressionEngine will default back to the native syntax for that stub.
:::

### Command Line Interface

You may access the Template Generator functionality through the Command Line Interface (CLI) as well by running `php artisan eecli generate:templates`.  For more information about the available options please consult the [ExpressionEngine Documentation](https://docs.expressionengine.com/latest/templates/generators.html#command-line-usage)

## Add-on Development

If you are developing an add-on and wish to support Template Generators you should first familiarize yourself with the [Template Generator Service](https://docs.expressionengine.com/latest/development/services/template-generator.html).

You can add support for the Twig and Blade templating engines by creating additional stubs in your `addon_name/stubs` folder that use the template engine suffix.  For instance if your add-on has a fieldtype your Native template stub might be `addon_name/stubs/field.php` and you could create a variant for Twig at `addon_name/stubs/field.twig.php` and similarly for Blade at `addon_name/stubs/field.blade.php`.

