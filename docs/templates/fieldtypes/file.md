# File

File fields utilize the built-in file browser to store uploaded files and images for your publishers.

```twig
{{ entry.file }}
```

## Variables

```twig
{{ entry.file.credit }}
{{ entry.file.description }}
{{ entry.file.directory_id }}
{{ entry.file.directory_title }}
{{ entry.file.extension }}
{{ entry.file.file_id }}
{{ entry.file.file_name }}
{{ entry.file.file_size }}
{{ entry.file.height }}
{{ entry.file.id_path }}
{{ entry.file.location }}
{{ entry.file.mime_type }}
{{ entry.file.modified_date }}
{{ entry.file.path }}
{{ entry.file.title }}
{{ entry.file.upload_date }}
{{ entry.file.url }}
{{ entry.file.width }}
```

## Parameters

```twig
{{ entry.file.parameters({wrap: 'link'}) }}
```

## Modifiers

### Rotate
```twig
{{ entry.file.rotate({angle: 90}) }}
```

### Crop
```twig
{{ entry.file.crop({width: 100, height: 100}) }}
```

### Resize
```twig
{{ entry.file.resize({width: 100, height: 100}) }}
```

### WebP
```twig
{{ entry.file.webp({width: 100, height: 100}) }}
```

### Resize And Crop
```twig
{{ entry.file.resize_crop({'resize:width': 100, 'crop:width': 100}) }}
```

### Pre-defined Manipulation
```twig
{{ entry.file.manipulation('manipulation_name') }}
```

## Chaining Modifiers

ExpressionEngine 7.3 introduced the ability to chain modifiers.  This can be a very valuable tool when working with files if you want to manipulate a modified file even further.

```twig
{{ entry.file.manipulation('manipulation_name').crop({width: 100, height: 100}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [File fieldtype](https://docs.expressionengine.com/latest/fieldtypes/file.html)
:::