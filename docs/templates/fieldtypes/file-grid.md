# File Grid

Contents of a File Grid field are accessed just as a regular Grid field would be, refer to the Grid field documentation for a full reference. A notable difference is the default File column automatically has a short name of `file`:

```twig
{% for row in entry.files %}
    {{ row.file.filename }}
{% endfor %}
```

:::info
See the ExpressionEngine Documentation for more information on the [File Grid fieldtype](https://docs.expressionengine.com/latest/fieldtypes/file-grid.html)
:::