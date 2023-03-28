# Rich Text Editor (RTE)

The Rich Text Editor is like a word processor that allows you to create richly-formatted content without writing any HTML. For example, you can create links, insert images, create bulleted or numbered lists, and a whole lot more.

```twig
{{ entry.rte | raw }}
```

## Parameters

### Text Only

If you pass the parameter text_only="yes" to RTE template tags, all HTML tags will be removed from the content, leaving only the text.

```twig
{{ entry.rte_field.parameters({text_only: "yes"}) }}
```

### Remove Images

If you just want to remove the images, but leave the rest of the HTML markup in place, you can use the `remove_images` parameter instead.

```twig
{{ entry.rte_field.parameters({remove_images: "yes"}) }}
```

### Images Only

You can use the parameter `images_only` to remove everything but the images from the content.

```twig
{{ entry.rte_field.parameters({images_only: "yes"}) }}
```


## Modifiers

### Excerpt

If your field has a “Read More” separator, this returns your RTE field contents up until that point. Otherwise it will return the full contents of your RTE field.

```twig
{{ entry.rte_field.excerpt }}
```

### Has Excerpt

For use in conditionals. Returns “y” if your RTE field has a “Read More” separator within it.

```twig
{% if entry.rte_field.has_excerpt == 'y' %}
    <a href="{{ exp.path('blog/full-posts/#{entry.url_title}') }}">Read more...</a>
{% endif %}
```

### Extended

If your field has a “Read More” separator, this returns the remaining portion of your RTE field contents after that point. Otherwise it won’t return anything.

```twig
<div class="extended">
    {{ entry.rte_field.extended }}
</div>
```

:::info
See the ExpressionEngine Documentation for more information on the [Rich Text Editor fieldtype](https://docs.expressionengine.com/latest/fieldtypes/rte.html)
:::