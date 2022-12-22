# Colorpicker

The color picker lets you select pre-defined or custom colors.

```
<div style="background-color: {{ entry.colorpicker }}"></div>
```

## Modifiers

### Contrast Color

Use the contrast_color modifier to output a black or white color that contrasts with the selected color

```
{{ entry.colorpicker.contrast_color }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Colorpicker fieldtype](https://docs.expressionengine.com/latest/fieldtypes/colorpicker.html)
:::