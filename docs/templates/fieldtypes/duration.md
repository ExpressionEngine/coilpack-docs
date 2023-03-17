# Duration

Duration is a fieldtype that allows you to store lengths of time.

```twig
{{ entry.duration }}
```

## Parameters

### Format

Similar to [Date Variable Formatting](https://docs.expressionengine.com/latest/templates/date-variable-formatting.html), you can customize how you display the duration using a format= parameter. For example, 2:15:12 (8112 seconds) could also be displayed with:

```twig
{{ entry.duration.parameters({format: '%h hrs, %m min'}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Duration fieldtype](https://docs.expressionengine.com/latest/fieldtypes/duration.html)
:::