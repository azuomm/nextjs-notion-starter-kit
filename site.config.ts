import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '559c5a3a05514877957998f969ba416b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Azuo blog',
  domain: 'myblog-nextjs-notion.vercel.app',
  author: 'Azuo',

  // open graph metadata (optional)
  description: 'Hello world, welcome to Azuo blog',

  // social usernames (optional)
  twitter: 'azuomm',
  // linkedin: 'azuomm',
  youtube: 'channel/UCxfCgcbaqZue34a5vlKewDA', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  github: 'azuomm',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL


  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'f1d388b508b64bae8a92d366a8fc713b'
    },
    {
      title: 'Contact',
      pageId: '1231414689c64330bc22bd44c1cc220c'
    }
  ]
})
