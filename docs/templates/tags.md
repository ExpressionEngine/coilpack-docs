---
sidebar_label: Tag Reference
---

# Tag Reference

This is a reference for ExpressionEngine tags that behave differently in Coilpack.  We include the native ExpressionEngine Template syntax in our examples for users who are familiar with that language.  However, please see the [ExpressionEngine Documentation](https://docs.expressionengine.com/latest/) for a definitive reference on using the native template language.

## Basic Syntax

```twig
{# Tag #}
{{ exp.addon_name.tag_name }}

{# Tag with parameters #}
{{ exp.addon_name.tag_name({name: "value"}) }}
```
