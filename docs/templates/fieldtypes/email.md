# Email Address

Email Address is a field type for storing email addresses.

```twig
{{ entry.email_address }}
```

## Modifiers

### Mailto
```twig
{{ entry.email_address.mailto({title: 'Test', subject: 'Testing', encode: false}) }}
```

:::info
See the ExpressionEngine Documentation for more information on the [Email Address fieldtype](https://docs.expressionengine.com/latest/fieldtypes/email-address.html)
:::