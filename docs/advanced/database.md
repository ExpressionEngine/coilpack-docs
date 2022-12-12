# Database

## Connection

Coilpack sets up a new MySQL database connection called `coilpack` using your ExpressionEngine config values.

## Queries

You can create write custom queries against this connection by using the Laravel DB Facade

```php
\Illuminate\Support\Facades\DB::connection('coilpack')->table('channel_entries')->select('entry_id')->take(10)->get();
```

For more information on what you can do with the [Laravel's Query Builder](https://laravel.com/docs/9.x/queries) check out their documentation.

## Models

Many native Expression Engine models have been translated and have an Eloquent Model counterpart that can be found in the `\Expressionengine\Coilpack\Models` namespace.

### Custom Fields

Several models pull custom field data data from across multiple tables (one per field).
These models are:

- `\Expressionengine\Coilpack\Models\Channel\ChannelEntry`
- `\Expressionengine\Coilpack\Models\Category\Category`
- `\Expressionengine\Coilpack\Models\Member\Member`

If you are retrieving more than a single model and intend to use these custom fields you may want to consider eager loading the data.  You only need to add the `data` relation to your query's eager loading function.  For a ChannelEntry query that would look like `ChannelEntry::with('data')->take(50)->get()`

Accessing the custom fields can be done right from the parent model like this:

```php
use \Expressionengine\Coilpack\Models\ChannelEntry;

$entry = ChannelEntry::find(1);

// Returns \Expressionengine\Coilpack\Models\FieldContent
$customField = $entry->custom_field_name;

// Get the ChannelField instance
$field = $customField->field;

// Use the Fieldtype to process the value for the custom field
// Returns Expressionengine\Coilpack\FieldtypeOutput which is a wrapper
// for the data to make display in templates more convenient
$value = $customField->value();
```

Another example of using ChannelEntry data

```php
use \Expressionengine\Coilpack\Models\ChannelEntry;

$entries = ChannelEntry::whereHas('channel', function($query) {
    return $query->where('channel_name', 'news');
})->get();

return $entries->transform(function($entry) {
    return [
        'title' => $entry->title,
        'custom' => $entry->custom_field_name
    ];
});
```



## Extending Models

If you want to add custom relationships, query scopes, accessors/mutators or any other functionality to a Coilpack model like `ChannelEntry` we recommend extending it and then doing any customization on your model.

```php

class MyChannelEntry extends \Expressionengine\Coilpack\Models\Channel\ChannelEntry {


}

```

Take a look at the documentation to understand more about what is possible with [Laravel's Eloquent ORM](https://laravel.com/docs/9.x/eloquent)
