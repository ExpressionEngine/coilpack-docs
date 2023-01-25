# Channel Entries

The Channel Entries query is designed to mimic the [Channel Entries Tag](../../templates/tags/channel-entries.mdx) and provide access to all of your entries and their data.

## Example Usage

```json
{
    channel_entries(channel:"about", status:"open", limit:1){
        entry_id
        title
        custom_channel_field
    }
}
```

## Arguments

*Channel* - Specify the channel of the entries

*Status* - Specify the status of the entries

*Limit* - Limit the number of results

## Modifiers

ExpressionEngine has a concept of [variable modifiers](https://docs.expressionengine.com/latest/templates/variable-modifiers.html) where you can modify the output of a variable during display.  Coilpack supports these modifiers in the context of GraphQL as arguments provided to the field you are requesting.

```json
{
    channel_entries {
        entry_id
        about_image {
            image(resize: {width:100}) {
                url
                width
                height
            }
            caption
            align
        }
    }
}
```

```json
{
    channel_entries{
        entry_id
        title
        page_content(length:true)
    }
}
```

## Single Channel Entry

```json
{
    channel_entry(entry_id:1) {
        entry_id
        title
	}
}
```