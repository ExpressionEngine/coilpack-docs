# Radio Buttons

Radio Buttons allow users to choose a single item from a list of options.

```twig
{{ entry.radio }}

{% for label, value in entry.radio.options %}
    {{ label }} - {{ value }}
{%endfor}

{% for label, value in entry.radio.selected %}
    {{ label }} - {{ value }}
{%endfor}
```


:::info
See the ExpressionEngine Documentation for more information on the [Radio Buttons fieldtype](https://docs.expressionengine.com/latest/fieldtypes/radio-buttons.html)
:::