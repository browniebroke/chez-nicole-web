const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : process.env.REVIEW_ID
    ? `https://deploy-preview-${process.env.REVIEW_ID}--chez-nicole.netlify.app`
    : `http://www.chez-nicole.fr`

module.exports = {
  siteMetadata: {
    title: 'Chez Nicole',
    description: `Chez Nicole est un restaurant familial situé à Sauclières, dans l'Aveyron`,
    siteUrl: baseUrl,
    author: 'browniebroke',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Chez Nicole',
        short_name: 'Chez Nicole',
        description: 'Site du restaurant Chez Nicole',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#b2d233',
        display: 'standalone',
        icon: 'src/assets/logos/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || 'UA-0',
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`, // Needs to be last
  ],
}
