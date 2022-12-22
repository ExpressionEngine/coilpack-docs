# Grid

The Grid field in ExpressionEngine provides a way to group fieldtypes in repeatable rows. This is useful for when you need to group a subset of data in your channel entry form that may or may not have a varying number of rows. You can select a minimum and a maximum amount of rows to allow data entry for, or it can be virtually infinite.

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

:::info
See the ExpressionEngine Documentation for more information on the [Grid fieldtype](https://docs.expressionengine.com/latest/fieldtypes/grid.html)
:::