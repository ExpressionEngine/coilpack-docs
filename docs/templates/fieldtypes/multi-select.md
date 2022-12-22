# Multi Select

Multi Select Fields allow publishers to choose multiple items from a list.

### Single Variable

You can use a single variable for Multi Select to render a comma-separated list of the labels.

```
{{ entry.multi_select }}
```

### Variable Pair

Using a variable pair, allows for customization of the output.

```
{% for option in entry.multi_select %}
    {{ option }}
{% endfor %}
```

## Parameters

```
{{ entry.multi_select.parameters({limit: 1, markup: 'ul'}) }}
```


:::info
See the ExpressionEngine Documentation for more information on the [Multi Select fieldtype](https://docs.expressionengine.com/latest/fieldtypes/multiselect.html)
:::