# Fieldtypes

Fieldtypes in Coilpack are designed to provide a similar and consistent experience across all templating engines.  The [ExpressionEngine documentation](https://docs.expressionengine.com/latest/fieldtypes/overview.html) provides more detail on how Fieldtypes behave natively while this documentation should help you understand how they can be used in Twig and Blade templates.

Certain parameters or modifiers may behave differently in Coilpack or may not be available at all.  We will try to call attention to these special cases.

## Basic Syntax

```twig
{# Field #}
{{ entry.field_name }}

{# Field with parameters #}
{{ entry.field_name.parameters({name: "value"}) }}

{# Modifier #}
{{ entry.field_name.modifier_name() }}

{# Modifier with parameters #}
{{ entry.field_name.modifier_name({parameter_name: "value"}) }}
```