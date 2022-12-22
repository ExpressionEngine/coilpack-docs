# File

File fields utilize the built-in file browser to store uploaded files and images for your publishers.

```
{{ entry.file }}
```

## Variables

```
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

```
{{ entry.file.parameters({wrap: 'link'}) }}
```

## Modifiers

### Rotate
```
{{ entry.file.rotate({angle: 90}) }}
```

### Crop
```
{{ entry.file.crop({width: 100, height: 100}) }}
```

### Resize
```
{{ entry.file.resize({width: 100, height: 100}) }}
```

### WebP
```
{{ entry.file.webp({width: 100, height: 100}) }}
```

### Resize And Crop
```
{{ entry.file.resize_crop({'resize:width': 100, 'crop:width': 100}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [File fieldtype](https://docs.expressionengine.com/latest/fieldtypes/file.html)
:::