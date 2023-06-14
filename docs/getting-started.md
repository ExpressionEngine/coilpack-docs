# Getting Started

Before we begin it's important to understand that when using Coilpack, your ExpressionEngine application will need to be accessed through a Laravel project.  This is because Coilpack depends on the Laravel Framework and operates within a Laravel request's lifecycle.

:::tip
Read more about how URLs are handled inside of Coilpack in the [Routing Section](./routing.md)
:::

## Quick Start

If you are new to Laravel and Coilpack we strongly recommend you follow the rest of this guide for getting started.  However, if you have installed Coilpack before or are familiar with setting up a Laravel application you can get started quickly with the commands below.

```sh
composer create-project --prefer-dist laravel/laravel project-name
cd project-name
composer require expressionengine/coilpack:1.x
php artisan coilpack
```

## Choosing a Laravel Version

We recommend using the latest version of Laravel whenever possible.  The only reason you should not use the latest version is if you are limited to a certain version of PHP.  The table below shows which versions of Laravel are supported on different versions of PHP.

| PHP     | Laravel |
| ------- | ------- |
| 8.1.0+  | 10.x    |
| 8.0.2+  | 9.x     |
| 7.4.0+  | 8.x     |

## Installation

To use Coilpack You will need a development environment with PHP >= 7.4.0 and Composer installed. Consult the [Laravel Installation documentation](https://laravel.com/docs/10.x/installation) for more help on setting up your environment.


### Create A Laravel Project

This create project command will setup a new Laravel project at the highest version supported by your environment.

```sh
composer create-project --prefer-dist laravel/laravel project-name
```

Alternatively you can specify a major version of Laravel:

```sh
composer create-project --prefer-dist laravel/laravel:^8.0 project-name
```

:::caution
You must set your webserver's document root to point to the `public` folder inside your Laravel project. Laravel Valet and Laravel Sail will do this automatically.
:::

:::tip
It can be helpful to tell Composer which version of PHP you're targeting.  This is especially important in a development environment where your webserver's PHP version may be different than the CLI.

To do this run: `composer config platform.php 8.0` substituting `8.0` for the version you are using.
:::

### Configure your Laravel Project

Now that you have a Laravel Project setup it is a good time to edit the values in your `.env` file to reflect your setup.  The `APP_URL` and `DB_*` variables are particularly important for later steps in the Coilpack setup.  The values you choose might look something like this:

```sh
APP_URL=https://project-name.test
DB_HOST=127.0.0.1
DB_DATABASE=project_name_database
DB_USERNAME=root
DB_PASSWORD=
```

### Require Coilpack

Inside of your Laravel project, you will need to update your project to use the Coilpack package.

```sh
cd project-name

composer require expressionengine/coilpack:1.x
```

### Run Coilpack Setup

During the setup process you may choose to install a new copy of ExpressionEngine or use an existing installation by providing the path to Coilpack.

From inside of your Laravel project, run the Coilpack setup.

```sh
php artisan coilpack
```

We recommend keeping your version of ExpressionEngine updated to the latest 7.x release as we are constantly making improvements that may also affect Coilpack.

### Using a New ExpressionEngine Install

If you want Coilpack to create a new ExpressionEngine install, it will be placed in an `ee` folder within your Laravel project.  You now need to setup ExpressionEngine via the `admin.php` file in your `ee` folder. Example: `http://localhost/admin.php`. Follow the on-screen instructions to finalize your ExpressionEngine install.

For more help with installing ExpressionEngine reference the [ExpressionEngine Docs](https://docs.expressionengine.com/latest/installation/installation.html).

### Using an Existing ExpressionEngine Install

If you want to use an existing ExpressionEngine install you will be prompted for a path that is accessible from your Laravel project.  The path can be relative or absolute and should point to the root folder of your ExpressionEngine install.  You will also be asked for relative paths to system and config folders.  The typical locations are provided as default answers but if you have a customized setup it is important to let Coilpack know where to find these directories.

After you have linked your site with Coilpack you will need to change the way you access the site.  For example if your ExpressionEngine site is located at `https://example.com`, and your Laravel application is setup to be accessed via `https://coilpack.example.com`, after setting up Coilpack you will need to access your ExpressionEngine site via `https://coilpack.example.com` (`https://coilpack.example.com/admin.php` to access the Control Panel).

For the sake of SEO, current links in place, etc, once you decide to use Coilpack for your website, you will probably want to update your webserver to point your site's current URL to your Laravel project. Talk to your webserver admin for information on how to accomplish this.

:::caution
Please note that ExpressionEngine 7 is required so if you would like to install Coilpack with an existing site you may need to upgrade your ExpressionEngine site first.
:::
