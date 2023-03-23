# Using GraphQL with Astro

[Astro](https://astro.build/) is an extremely fast and flexible Javascript site framework that can generate static sites with ExpressionEngine using Coilpack's GraphQL API.  This guide assumes you have already [installed Coilpack](../getting-started.md) and ExpressionEngine.

## Configure Coilpack

Coilpack ships with the GraphQL integration disabled by default.  You will need to enable it by adding `COILPACK_GRAPHQL_ENABLED=true` to your Laravel `.env` file.

For the purposes of this guide we are also going to disable any authentication requirements on our GraphQL endpoint so you should also add `COILPACK_GRAPHQL_AUTH_ENABLED=false` to your `.env` file.

## Create an Astro Site

Start the installer wizard

```
npm create astro@latest

Where should we create your new project?
# <Type a Path>

How would you like to start your new project?
# <Choose Empty>

Install dependencies?
# <Choose Yes>

Initialize a new git repository?
# <Your choice>

Do you plan to write TypeScript?
# <Your choice>

Liftoff confirmed. Explore your project!
```

Once the installation is complete you can start the live reload development server

```
npm run dev
```

## Connect to GraphQL

After we install Astro we are going to create a helper class to run our GraphQL queries through.  Astro is extremely flexible so you can handle this part in many different ways.

Create a new file at `src/graphql.js` with the following content:

```js
class GraphQL {

    static endpoint = 'http://coilpack-site-url.test/graphql';

    static async query(query) {
        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (json.errors) {
            console.log(json.errors);
            throw new Error('GraphQL query failed.');
        }

        return json.data;
    }
}

export default GraphQL;
```


## Creating our Home Page

And then we will create a simplified home page at `src/pages/index.astro`.  We will be using the [Channel Entries Query](../graphql/queries/channel-entries.md) to list out our entries and the [Global Variables Query](../graphql/queries/global-variables.md) to get our Site Name.

```jsx
---
import GraphQL from '../graphql';

const data = await GraphQL.query(`
{
    variables{
        site_name
    }
    exp_channel_entries {
        data {
            entry_id
            title
            url_title
        }
    }
}
`);
---

<html lang="en">
	<body>
		<h1>{data.variables.site_name}</h1>

        <ul>
        { data.exp_channel_entries.data.map(entry => {
            return (<li><a href={"entry/"+entry.url_title}>{entry.title}</a></li>)
        })}
        </ul>
	</body>
</html>
```

You should see a list of your entries rendered out on your site's home page now.  However clicking the links to these entries will result in a 404 page until we complete the next step.

## Setting up our Pages

Next we will set up a template that each of our individual pages will use to populate and display their content.  In Astro this file is also responsible for the [dynamic page routing](https://docs.astro.build/en/tutorial/5-astro-api/2/#dynamic-page-routing) which you will see handled by the `getStaticPaths()` function below.

Create a new file at `./src/pages/entry/[slug].astro` with the following content:

```jsx
---
const { slug } = Astro.params;
import GraphQL from '../../graphql';

let data = await GraphQL.query(`
{
    exp_channel_entries(url_title: "${slug}") {
        data {
            entry_id
            title
            url_title
            page_content
        }
    }
}
`)

let entry = data.exp_channel_entries.data[0];

export async function getStaticPaths() {
    let data = await GraphQL.query(`
    {
        exp_channel_entries(per_page:1000) {
            data {
                entry_id
                url_title
            }
        }
    }
  `);

  return data.exp_channel_entries.data.map((entry) => ({
    params: { slug: entry.url_title },
  }));
}
---
<div>
    <h1>{entry.title}</h1>
    <div set:html={entry.page_content}></div>
</div>
```

Now you should be able to click the entry links on the home page and view each individual entry's content from our new template.
