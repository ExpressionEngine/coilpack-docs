# Using Twig Templates

This guide will help you start using Twig templates inside your ExpressionEngine site.  First you will need to [install Coilpack](../getting-started.md).

Once you have Coilpack and the latest version of ExpressionEngine 7 you can open up your code editor and create a new file at `/ee/system/user/templates/default_site/example.group/index.html.twig`.  Inside this file add the following:
```twig
<html>
    <head>
        <title>{{ global.site_name }}</title>
    </head>
    <body>
        <h1>Welcome to {{ global.site_name }}</h1>

        <a href="{{ global.site_url }}">Home</a>
    </body>
</html>
```

You should now be able visit `your-site-url.test/example` and see the template above rendered with your data.

This is just a simple example of using global variables in a Twig template however you can do much more when you have a site populated with content.  Learning how to manage content in ExpressionEngine is beyond the scope of this guide but there is an excellent [Introduction series on ExpressionEngine University](https://u.expressionengine.com/course/introduction-to-building-an-expressionengine-site).

Once you have a site with content we can create another Twig template to demonstrate how you can render your dynamic content.

Create a new file at `/ee/system/user/templates/default_site/example.group/entry.html.twig`.  The following is an example of how we might fetch an entry and display the default `title` and `date` fields along with two custom fields. We have a File field named `featured_image` and an RTE field named `page_content`.

```twig
{% set entry = exp.channel.entries({limit:1}).first() %}
<html>
    <head>
        <title>{{ entry.title }} | {{ global.site_name }}</title>
    </head>
    <body>
        <h1>{{ entry.title }}</h1>
        <span>Published on {{ entry.entry_date }}</span>
        <img src="{{ entry.featured_image }}" />
        {{ entry.page_content | raw}}
    </body>
</html>
```

:::note
The [Twig `raw` filter](https://twig.symfony.com/doc/3.x/filters/raw.html) is used to prevent escaping the html tags that are part of the RTE output.
:::

For more details check out our documentation on [writing templates](../templates/index.mdx) and the [fieldtypes](../templates/fieldtypes.md) and [tags](../templates/tags.md) that are available for you to use.

## Twig functions and filters

Coilpack is using the [Laravel TwigBridge package](https://github.com/rcrowe/TwigBridge) to handle loading and parsing Twig templates.  This library adds the following filters and functions to help you develop your templates.

**Functions**:

- asset, action, url, route, secure_url, secure_asset
- auth_check, auth_guest, auth_user
- can
- config_get, config_has
- dump
- input_get, input_old, input_has
- link_to, link_to_asset, link_to_route, link_to_action
- session_has, session_get, csrf_token, csrf_field, method_field
- str_* (All the [Str:: methods](https://laravel.com/docs/8.x/helpers#strings-method-list), snake_cased)
- trans, trans_choice
- url_* (All the [URL:: methods](https://laravel.com/docs/8.x/helpers#urls-method-list), snake_cased)

**Filters**:

- camel_case, snake_case, studly_case
- str_* (All the [Str:: methods](https://laravel.com/docs/8.x/helpers#strings-method-list), snake_cased)
- trans, trans_choice



