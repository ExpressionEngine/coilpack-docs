# File

```
{{ entry.file }}
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