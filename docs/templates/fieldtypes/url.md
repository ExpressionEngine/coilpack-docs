# URL

URL is a fieldtype for storing URLs. This fieldtype is validated for the content author, so that only fully-formed and valid URLs are allowed. The site builder can determine which URL schemes are allowed. URLs are entity-encoded so that they may be used directly in links and other HTML attributes, e.g.:

```twig
<a href="{{ entry.url }}">Your Link</a>
```

:::info
See the ExpressionEngine Documentation for more information on the [URL fieldtype](https://docs.expressionengine.com/latest/fieldtypes/url.html)
:::