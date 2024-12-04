# Upgrade Guide

You can upgrade to the latest version of Coilpack by running `composer update --with-all-dependencies` at the root level of your Laravel project.  Upgrades that require extra attention or interaction will be documented on this page.

## Review the Changelog

It's always a good idea to be aware of what is changing in each release. You can see a list of all changes in our [current changelog](https://github.com/ExpressionEngine/Coilpack/blob/1.x/CHANGELOG.md).

## Configuration Changes

Between versions the Coilpack configuration file may change.  We recommend comparing the most [recent changes](https://github.com/ExpressionEngine/Coilpack/blob/1.x/config/coilpack.php) with your own `config/coilpack.php` file.

## Upgrading to 2.0 from 1.x

The GraphQL signature for the Range Slider Fieldtype has changed to allow requesting specific subfields like `value`, `from`, and `to`.

`Expressionengine\Coilpack\View\FormTag` has been deprecated in 2.0, so if you were extending this class please be aware and update your subclasses.  The new trait `Expressionengine\Coilpack\View\Traits\CreatesHtmlForm` provides similar functionality.