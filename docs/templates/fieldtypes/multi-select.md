# Multi-Select

```
{{ entry.multi_select }}
```

```
{% for option in entry.multi_select %}
    {{ option }}
{% endfor %}
```

## Parameters

```
{{ entry.multi_select.parameters({limit: 1, markup: 'ul'}) }}
```