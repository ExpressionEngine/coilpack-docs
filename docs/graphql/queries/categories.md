# Categories

Query against your categories and their content.

## Example Usage

```json
{
    categories(channel:"blog", status:"featured", limit:10) {
        cat_id
        custom_category_field
	}
}
```

## Arguments

*Channel* - Specify the channel of the categories

*Status* - Specify the status of the categories

*Limit* - Limit the number of results
