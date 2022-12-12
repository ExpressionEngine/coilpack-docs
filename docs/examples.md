# Examples

## Channel Entries

```php
$entries = \Expressionengine\Coilpack\Models\ChannelEntry::whereHas('channel', function($query) {
    return $query->where('channel_name', 'news');
})->get();

return $entries->transform(function($entry) {
    return [
        'title' => $entry->title,
        'custom' => $entry->custom_field_name
    ];
});
```