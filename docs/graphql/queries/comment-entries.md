# Comment Entries

The Comment Entries query is powered by the [Comment Entries Tag](../../templates/tags/comment-entries.mdx) and provides access to all of the same arguments.

## Example Usage

```graphql
{
    exp_comment_entries(
        author_id: "5",
        channel: "channel1|channel2",
        comment_id: "22",
        dynamic: true,
        entry_id: "not 45|534|807",
        entry_status: "Featured",
        limit: "30",
        orderby: "date",
        site: "1",
        sort: "asc",
        status: "Closed",
        url_title: "my_wedding"
    ) {
        comment
    }
}
```
