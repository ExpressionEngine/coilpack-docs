# Checkboxes

Checkboxes allow publishers to choose multiple items from a list.

### Single Variable

You can use a single variable for Checkboxes to render a comma-separated list of the labels.

```
{{ entry.checkbox_field }}
```

### Variable Pair

Using a variable pair, allows for customization of the output.

```
{% for value in entry.checkbox_field %}
    {{ value }}
{% endfor %}
```

## Parameters

### Limit

```
{{ entry.checkbox_field.parameters({limit: 1}) }}
```

### Markup

```
{{ entry.checkbox_field.parameters({markup: 'ul'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Checkboxes fieldtype](https://docs.expressionengine.com/latest/fieldtypes/checkboxes.html)
:::