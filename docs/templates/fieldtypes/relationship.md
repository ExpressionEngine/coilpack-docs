# Relationship

Relationships are an extremely powerful tool that allow you to connect Entries in one Channel to those in another one, or even to other entries in the same channel. This ability allows you to store very complex content in your Channel entries.

```twig
{% for child in entry.relationship %}
    {{ child.title }}
{% endfor %}
```

:::info
See the ExpressionEngine Documentation for more information on the [Relationship fieldtype](https://docs.expressionengine.com/latest/fieldtypes/relationship.html)
:::