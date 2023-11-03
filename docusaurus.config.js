// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Coilpack',
    tagline: 'ExpressionEngine',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/coilpack-docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ExpressionEngine', // Usually your GitHub org/user name.
    projectName: 'Coilpack', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        algolia: {
            appId: 'YC8OOJPRBB',
            apiKey: '6fce6dd89b176cd112b727bddd10ef25',
            indexName: 'coilpack',
        },
        navbar: {
            title: 'Coilpack',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'index',
                    position: 'left',
                    label: 'Documentation',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    type: 'search',
                    position: 'right',
                },
                {
                    href: 'https://github.com/expressionengine/coilpack',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Getting Started',
                        to: '/docs/getting-started',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Exchange',
                            href: 'https://expressionengine.stackexchange.com/',
                        },
                        {
                            label: 'Slack',
                            href: 'https://expressionengine.com/blog/join-us-in-slack',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/eecms',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Forum',
                            to: 'https://expressionengine.com/forums',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/expressionengine/coilpack',
                        },
                    ],
                },
            ],
            copyright: `Packet Tide owns and develops ExpressionEngine.<br/> © Packet Tide, All Rights Reserved.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            // Unfortunately Twig isn't this easy to support
            // https://github.com/facebook/docusaurus/issues/6963
            // https://github.com/facebook/docusaurus/issues/8065
            // additionalLanguages: ['php','twig'],
        },
    }),
};

module.exports = config;