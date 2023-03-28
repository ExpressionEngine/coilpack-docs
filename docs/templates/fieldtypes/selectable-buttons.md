# Selectable Buttons

Selectable Button fields allow publishers to choose either multiple or single items from a list depending on the setting.

```twig
{{ entry.buttons }}

{% for label, value in entry.buttons.options %}
    {{ label }} - {{ value }}
{%endfor}

{% for label, value in entry.buttons.selected %}
    {{ label }} - {{ value }}
{%endfor}
```

## Parameters

```twig
{{ entry.buttons.parameters({limit: 1, markup: 'ul'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Selectable Buttons fieldtype](https://docs.expressionengine.com/latest/fieldtypes/selectable-buttons.html)
:::