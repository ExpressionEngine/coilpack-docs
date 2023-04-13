# Getting Started

## What Happens To My ExpressionEngine Site?

It's important for Coilpack users to understand that when using Coilpack, your ExpressionEngine application will need to be accessed through the URL associated with your Laravel project. This is because Laravel handles all parsing of your templates so that you can use Blade and Twig.

**New ExpressionEngine Sites**

Coilpack has the ability to create a new ExpressionEngine site for you on setup. See the [Installation](#installation) section below for more details on how to accomplish this.

**Current ExpressionEngine Sites**

For Example, if you have a current ExpressionEngine site located at `https://amazingsite.com`, and your Laravel application is setup to be accessed via `https://amazinglaravelsite.com`, after installing Coilpack you will now access your ExpressionEngine site via `https://amazinglaravelsite.com` (`https://amazinglaravelsite.com/admin.php` to access the Control Panel).

For the sake of SEO, current links in place, etc, once you decide to use Coilpack for your website, you will probably want to update your webserver to point your site's current URL to your Laravel project. Talk to your webserver admin for information on how to accomplish this.

:::tip
Read more about how URLs are handled inside of Coilpack in the [Routing Section](./routing.md)
:::

## Selecting a Laravel Version

We recommend using the latest version of Laravel whenever possible.  If you are limited to a certain version of PHP we have a table below showing which version of Laravel may be right for you.

| PHP     | Laravel |
| ------- | ------- |
| 8.1.0+  | 10.x    |
| 8.0.2+  | 9.x     |
| 7.4.0+  | 8.x     |

## Installation

To use Coilpack You will need a development environment with PHP >= 7.4.0 and Composer installed. Consult the [Laravel Installation documentation](https://laravel.com/docs/9.x/installation) for more help on setting up your environment.


**Create A Laravel Project**


```
composer create-project --prefer-dist laravel/laravel:^8.0 project-name
```

:::caution
You must set your webserver's document root to point to the `public` folder inside your Laravel project. Laravel Valet and Laravel Sail will do this automatically.
:::

:::tip
It can be helpful to tell Composer which version of PHP you're targeting.  This is especially important in a development environment where your webserver's PHP version may be different than the CLI.

To do this run: `composer config platform.php 8.0` substituting `8.0` for whichever version you are using.

:::

**Configure your Laravel Project**

Now that you have a Laravel Project setup it is a good time to edit the values in your `.env` file to reflect your setup.  The `APP_URL` and `DB_*` variables are particularly important.

**Install Coilpack**

Inside of your Laravel project, you will need to update your project to use the Coilpack package.

```
cd project-name

composer require expressionengine/coilpack:0.x-dev
```

**Run Coilpack Setup**

During the setup process you may choose to install a new copy of ExpressionEngine or point Coilpack to the path of an existing installation.  Please note that ExpressionEngine 7 is required so if you would like to install Coilpack with an existing site you may need to upgrade your ExpressionEngine install first.

From inside of your Laravel project, run the Coilpack setup.

```
php artisan coilpack
```

We recommend keeping your version of ExpressionEngine updated to the latest 7.x release as we are constantly making improvements that may also affect Coilpack.

**Install ExpressionEngine**

If you chose for Coilpack to create a new copy of ExpressionEngine, you will find a new `ee` folder inside of your Laravel project.  You now need to install ExpressionEngine via the `admin.php` file in your `ee` folder. Example: `https://example.com/admin.php` . Follow the on-screen instructions to install ExpressionEngine.

:::tip
For more help with installing ExpressionEngine reference the [ExpressionEngine Docs](https://docs.expressionengine.com/latest/installation/installation.html)
:::

