# Channel Entries

The Channel Entries query is powered by the [Channel Entries Tag](../../templates/tags/channel-entries.mdx) and provides access to all of the same arguments.

The query returns a paginated response which means you will nest all of your requested fields within a `data` field as shown in the example below.

## Example Usage

```graphql
{
    exp_channel_entries(
        category_id: "21"
        channel: "about"
        status: "open",
        per_page: 2
    ) {
        data {
            entry_id
            title
            custom_channel_field
        }
        total
        per_page
        current_page
        from
        to
        last_page
        has_more_pages
    }
}
```


## Modifiers

ExpressionEngine has a concept of [variable modifiers](https://docs.expressionengine.com/latest/templates/variable-modifiers.html) where you can modify the output of a variable during display.  Coilpack supports these modifiers in the context of GraphQL as arguments provided to the field you are requesting.

Here is an example of using the `resize` modifier available on File fieldtypes

```graphql
{
    exp_channel_entries {
        data {
            entry_id
            about_image { # File Grid fieldtype
                image(resize: {width:100}) { # File fieldtype
                    url
                    width
                    height
                }
                caption
                align
            }
        }
    }
}
```

And here is an example of using the `length` modifier available on most fieldtypes.

```graphql
{
    exp_channel_entries {
        entry_id
        title
        page_content(length:true)
    }
}
```