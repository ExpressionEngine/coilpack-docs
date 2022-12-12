# Events

Coilpack gives you the ability to listen for ExpressionEngine's native extension hooks as Laravel events.  You can prefix any regular hook with `ee:` and listen for it as a Laravel Event like this:

```php
    Event::listen('ee:core_boot', function() {
        echo '<h1>Booting</h1>';
    });
```

## Coilpack Booted Hook

We have also added a new hook to ExpressionEngine when Coilpack is installed which is called `coilpack_booted`. This way your ExpressionEngine Add-on can have an extension that hooks into this event and will only run when Coilpack has been booted.

Coilpack treats this like any other ExpressionEngine hook so you may also listen for it in Laravel like this:

```php
Event::listen('ee:coilpack_booted', function() {
    echo('Coilpack booted');
});
```

## ExpressionEngine Hooks

Learn more about [ExpressionEngine extensions](https://docs.expressionengine.com/v6/development/extensions.html) and view a complete list of hooks.

## Laravel Events

There are a lot of ways to use Laravel's powerful Event system so we highly recommend [reading their documentation](https://laravel.com/docs/9.x/events) too.