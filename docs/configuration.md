# Configuration

We use a configuration file in order for Coilpack to understand the details of your ExpressionEngine installation.

## Setup

If you followed the steps in [Getting Started](./getting-started.md) you should have already run `php artisan coilpack` which creates the `config/coilpack.php` file for you.  If you do not want to run this command you may also publish the config file by running `php artisan vendor:publish --tag=coilpack-config`.

## Environment variables

Due to the nature of how ExpressionEngine is loaded through Coilpack you can set variables in your Laravel `.env` and access those values inside of your ExpressionEngine `config.php` file.  This can help keep your secrets out of version control and in one central location.  We recommend updating your `config.php` to access database credentials and other secrets from the `$_ENV` global.

Certain configuration variables in ExpressionEngine will be overwritten by your Laravel environment and config variables.  This is a list of current overrides:

| Environment | Config | Overwrites Config | Overwrites Control Panel Settings |
| ----------- | ------ | ----------------- | --------------------------------- |
| APP_URL | 'app.url' | $config['base_url'] | URL and Path > Default base URL |
| N/A | 'coilpack.base_path' | $config['base_path'] | URL and Path > Default base path |


## Accessing ExpressionEngine Config Values

After Coilpack bootstraps ExpressionEngine you will be able to access any of your ExpressionEngine `system/user/config.php` values through the Laravel `config()` helper.  For example to get your `app_version` you could call `config('coilpack.expressionengine.app_version')`  within your Laravel application.