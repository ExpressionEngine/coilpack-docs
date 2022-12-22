# Range Slider

The Range Slider fieldtype allows the user to select numerical value. It is rendered as range HTML input type with some additional styling, allowing users to precisely select the value.

```
{{ entry.range }}
```

## Variables

```
{{ entry.range.from }}
{{ entry.range.to }}
```

## Parameters

```
{{ entry.range.parameters({decimal_place: '2', prefix: 'yes', suffix: 'yes'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Range Slider fieldtype](https://docs.expressionengine.com/latest/fieldtypes/range-slider.html)
:::