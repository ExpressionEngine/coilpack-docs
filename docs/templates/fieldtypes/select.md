# Select Dropdown

Select Dropdown fields allow publishers to choose a single item from a dropdown list.

```twig
{{ entry.select }}

{% for label, value in entry.select.options %}
    {{ label }} - {{ value }}
{%endfor}

{% for label, value in entry.select.selected %}
    {{ label }} - {{ value }}
{%endfor}
```

## Parameters

```
{{ entry.select.parameters({markup: 'ul'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Select Dropdown fieldtype](https://docs.expressionengine.com/latest/fieldtypes/select.html)
:::