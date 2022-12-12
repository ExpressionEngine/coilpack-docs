# Using Twig Templates

This guide will help you start using Twig templates inside your ExpressionEngine site.  First you will need to [install Coilpack](../getting-started.md).

Once you have Coilpack and the latest version of ExpressionEngine 7 you can open up your code editor and create a new file at `/ee/system/user/templates/default_site/example.group/index.html.twig`.  Inside this file add the following:
```
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

## Create a Blog Channel


## Create Fields


## Create a Template


## Create some Entries


