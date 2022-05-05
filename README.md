# Qualtrics API Docs Website

This is the [Stoplight](https://stoplight.io/) enabled API Documentation website for Qualtrics.

Stoplight has documentation on how to implement their Elements and Dev-Portal [available here](https://meta.stoplight.io/).

The Gatsby application is designed as a single page application centered on [an Index Page](./src/pages/index.tsx). In that page, you'll commented logic in the top of the page that deals with V1 and V2 links, and how to handle it if the page receives one of those links.

The [Redirect Tool](./src/services/redirectTool.ts) serves as a map for the supported v1 links that will successfully redirect. We maintained this and V2 link forwarding because we didn't know which links were "in the wild" and wanted customers to have a seamless experience.

Amplitude Analytics setup is in the [Gatsby-Config](./gatsby-config.js) file, including the key used.

The Qualtrics Site Feedback is supported by adding the [html.js](./src/html.js) file, and modifying it to include the necessary `div` element and the javascript that supports the functionality.

## Important

Never modify the[CNAME](./static/CNAME) file. It must always have the content of `api.qualtrics.com` to ensure the subdomain is not stolen by bots that crawl github for these kinds of things. If you accidentally publish with different content, you will need to involve netsec and reclaim the domain through Github support.
