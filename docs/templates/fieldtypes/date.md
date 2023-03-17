# Date

Date fields render as regular date variables:

```twig
{{ entry.date }}
```

## Parameters

```twig
{{ entry.date.parameters({format: '%m/%d/%Y', timezone: 'UTC'}) }}
```

Visit [Date Variable Formatting](https://docs.expressionengine.com/latest/templates/date-variable-formatting.html) to see all date formatting options.

:::info
See the ExpressionEngine Documentation for more information on the [Date fieldtype](https://docs.expressionengine.com/latest/fieldtypes/date.html)
:::