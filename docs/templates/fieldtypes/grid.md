# Grid

```
{% for row in entry.grid %}
    {{ row.column_1 }}
    {{ row.column_2 }}
{% endfor %}
```

## Parameters

```
{% for row in entry.grid.parameters({sort: 'desc', limit: 2}) %}
```