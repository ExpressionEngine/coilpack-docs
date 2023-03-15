# Channel Categories

The Channel Categories query is powered by the [Channel Categories Tag](../../templates/tags/channel-categories.mdx) and provides access to all of the same arguments.

The query returns a paginated response which means you will nest all of your requested fields within a `data` field as shown in the example below.

## Example Usage

```graphql
{
    exp_channel_categories(channel:"blog", group_id: "4") {
        data {
            cat_id
            custom_category_field
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
