Gatsby + Netlify CMS Starter
============================

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f79be58-c54c-46cf-a29b-59d5f0391438/deploy-status)](https://app.netlify.com/sites/fab-notes/deploys)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a
single source of truth, and [Netlify](https://www.netlify.com) for continuous
deployment, and CDN distribution.

Prerequisites
-------------

-   Node (I recommend using v8.2.0 or higher)

-   [Gatsby CLI](https://www.gatsbyjs.org/docs/)

Getting Started
---------------

### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ npm run serve
```
