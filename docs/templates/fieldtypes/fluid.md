# Fluid

```
{% for row in entry.fluid %}
    Value: {{ row }}
    Field Type: {{ row.field.field_type }}
    Field Name: {{ row.field.field_name }}
{% endfor %}
```