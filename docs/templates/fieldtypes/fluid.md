# Fluid

```
{% for row in entry.fluid %}
    Value: {{ row }}
    Field Type: {{ row.field.field_type }}
    Field Name: {{ row.field.field_name }}
{% endfor %}
```

:::info
See the ExpressionEngine Documentation for more information on the [Fluid fieldtype](https://docs.expressionengine.com/latest/fieldtypes/fluid.html)
:::