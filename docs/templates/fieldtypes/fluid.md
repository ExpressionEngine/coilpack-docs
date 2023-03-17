# Fluid

A Fluid field is a collection of fields. A Fluid field can contain any native fieldtype except another Fluid field. The fields assigned to the Fluid field can then be used multiple times in the same entry when creating/editing the entry. The author also has control over the order of the fields.

```twig
{% for row in entry.fluid %}
    Value: {{ row }}
    Field Type: {{ row.field.field_type }}
    Field Name: {{ row.field.field_name }}
{% endfor %}
```

:::info
See the ExpressionEngine Documentation for more information on the [Fluid fieldtype](https://docs.expressionengine.com/latest/fieldtypes/fluid.html)
:::