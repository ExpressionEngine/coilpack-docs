# Checkboxes

Checkboxes allow publishers to choose multiple items from a list.

### Single Variable

You can use a single variable for Checkboxes to render a comma-separated list of the labels.

```twig
{{ entry.checkbox_field }}

{% for label, value in entry.checkbox_field.options %}
    {{ label }} - {{ value }}
{%endfor}

{% for label, value in entry.checkbox_field.selected %}
    {{ label }} - {{ value }}
{%endfor}
```

## Parameters

### Limit

```twig
{{ entry.checkbox_field.parameters({limit: 1}) }}
```

### Markup

```twig
{{ entry.checkbox_field.parameters({markup: 'ul'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Checkboxes fieldtype](https://docs.expressionengine.com/latest/fieldtypes/checkboxes.html)
:::