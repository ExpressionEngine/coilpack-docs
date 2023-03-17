# Multi Select

Multi Select Fields allow publishers to choose multiple items from a list.

### Single Variable

You can use a single variable for Multi Select to render a comma-separated list of the labels.

```twig
{{ entry.multi_select }}

{% for label, value in entry.multi_select.options %}
    {{ label }} - {{ value }}
{%endfor}

{% for label, value in entry.multi_select.selected %}
    {{ label }} - {{ value }}
{%endfor}
```

## Parameters

```twig
{{ entry.multi_select.parameters({limit: 1, markup: 'ul'}) }}
```


:::info
See the ExpressionEngine Documentation for more information on the [Multi Select fieldtype](https://docs.expressionengine.com/latest/fieldtypes/multiselect.html)
:::