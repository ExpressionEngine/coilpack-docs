# Using GraphQL with Gatsby

[Gatsby](https://www.gatsbyjs.com/) is a popular React-based static site generator that can connect with ExpressionEngine through Coilpack's GraphQL API.  This guide assumes you have already [installed Coilpack](../getting-started.md) and ExpressionEngine.

## Configure Coilpack

Coilpack ships with the GraphQL integration disabled by default.  You will need to enable it by adding `COILPACK_GRAPHQL_ENABLED=true` to your Laravel `.env` file.

For the purposes of this guide we are also going to disable any authentication requirements on our GraphQL endpoint so you should also add `COILPACK_GRAPHQL_AUTH_ENABLED=false` to your `.env` file.

## Create a Gatsby Site

Now we will create a new Gatsby site.  You can perform this setup anywhere but it should be in a different directory than your Coilpack installation.

```
npm init gatsby my-coilpack-site -- -y
```

Change into your new Gatsby site's directory

```
cd my-coilpack-site
```

Install the GraphQL Source Plugin

```
npm install gatsby-source-graphql
```

Start the development server

```
npm run develop
```

:::tip
Gatsby will start a hot-reloading development environment accessible by default at http://localhost:8000
:::

## Configure Gatsby's GraphQL Plugin

Gatsby should have created a config file during installation at `./gatsby-config.js`.  We need to add an entry to the plugins array to tell Gatsby where to find our Coilpack site and its GraphQL endpoint.

```js
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    ...
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                // Arbitrary name for the remote schema Query type
                typeName: "EE",
                // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: "ee",
                // Url to query from
                url: "http://coilpack-site-url.test/graphql",
                // HTTP headers
                headers: {
                // Learn about environment variables: https://gatsby.dev/env-vars
                // Authorization: `Bearer ${process.env.COILPACK_GRAPHQL_TOKEN}`,
                },
            },
        },
    ]
};
```

## Creating our Home Page

And then we will create a simplified home page at `src/pages/index.js`.  We will be using the [Channel Entries Query](../graphql/queries/channel-entries.md) to list out our entries and the [Global Variables Query](../graphql/queries/global-variables.md) to get our Site Name.

```js
import * as React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
    return (
        <div>
            <h1>{ data.ee.variables.site_name }</h1>
            <ul>
            { data.ee.exp_channel_entries.data.map(entry => {
                return (<li><a href={"entry/"+entry.url_title}>{entry.title}</a></li>)
            })}
            </ul>
        </div>
    )
}

export const query = graphql `
{
    ee {
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
}
`

export default HomePage
```

You should see a list of your entries rendered out on your site's home page now.  However clicking the links to these entries will result in a 404 page until we finish the rest of this guide.

## Creating our Page Template

Next we will set up a template that each of our individual pages will use to populate and display their content.

Create a file at `./src/templates/page.js` with the following code:

```js
import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($entryId: String) {
    ee {
      exp_channel_entries(entry_id: $entryId) {
        data {
            entry_id
            title
            url_title
            page_content
        }
      }
    }
  }
`

const Entry = ({ data }) => (
    <div>
        <h1>{data.ee.exp_channel_entries.data[0].title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.ee.exp_channel_entries.data[0].page_content}}></div>
    </div>
)

export default Entry
```


## Populating the Pages

Now we need to add some code to [Gatsby's Node API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) to handle creating our pages dynamically.  This will tell Gatsby to query for Channel Entries during the build process and create a page (using our new template) for each entry.

Create a file at `./gatsby-node.js` and add the following code:

```js

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
      ee {
        exp_channel_entries(per_page:1000) {
            data {
                entry_id
                url_title
            }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panic("Error loading entries!", reporter.errors)
    }

    result.data.ee.exp_channel_entries.data.forEach(entry => {
        actions.createPage({
            path: `/entry/${entry.url_title}`,
            component: require.resolve(`./src/templates/page.js`),
            context: {
                entryId: `${entry.entry_id}`,
            },
        })
    })
}
```

After you make this change you will need to stop the development server and restart it (`npm run develop`).  Now you should be able to click through the links on your home page and see content in your page template.



