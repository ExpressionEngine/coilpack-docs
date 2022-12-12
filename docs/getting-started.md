# Getting Started

## Selecting a Laravel Version

We recommend using the latest version of Laravel whenever possible.  If you are limited to a certain version of PHP we have a table below showing which version of Laravel may be right for you.

| PHP     | Laravel |
| ------- | ------- |
| 8.0.2+  | 9.x     |
| 7.3.0+  | 8.x     |
| 7.2.5+  | 7.x     |

## Installation

To use Coilpack You will need a development environment with PHP >= 7.2.5 and Composer installed. Consult the [Laravel Installation documentation](https://laravel.com/docs/9.x/installation) for more help on setting up your environment.

**Install Laravel**

```
composer create-project --prefer-dist laravel/laravel:^8.0 project-name
```

**Install Coilpack**

```
composer require expressionengine/coilpack
```

**Run Coilpack Setup**

During the setup process you may choose to install a new copy of ExpressionEngine or point Coilpack to the path of an existing installation.  Please note that ExpressionEngine 7 is required so if you would like to install Coilpack with an existing site you may need to upgrade first.

```
php artisan coilpack
```

We recommend keeping your version of ExpressionEngine updated to the latest 7.x release as we are constantly making improvements that may also affect Coilpack.


