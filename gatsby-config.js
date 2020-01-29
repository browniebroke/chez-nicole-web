module.exports = {
  siteMetadata: {
    title: 'Chez Nicole',
    description:
      "Chez Nicole est un restaurant familial situé à Sauclières, dans l'Aveyron",
    siteUrl: 'http://www.chez-nicole.fr',
    author: 'browniebroke',
    image: '/img/content/bar-original.jpg',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/gallery/`,
        name: 'gallery',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/`,
        name: 'static',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Chez Nicole',
        short_name: 'Chez Nicole',
        description: 'Site du restaurant Chez Nicole',
        homepage_url: 'https://www.chez-nicole.fr',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#b2d233',
        display: 'standalone',
        icon: 'static/img/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || '',
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: 'https://4422fdb09f984c698c6de2cc1d491354@sentry.io/1367992',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`, // Needs to be last
  ],
}
