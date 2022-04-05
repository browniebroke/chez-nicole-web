const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : process.env.REVIEW_ID
    ? `https://deploy-preview-${process.env.REVIEW_ID}--chez-nicole.netlify.app`
    : `http://www.chez-nicole.fr`
const gaTrackingId =
  process.env.PRODUCTION_DEPLOY === 'true' ? 'G-M7V69MM8ME' : 'G-xxx'

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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          gaTrackingId, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        resolveSiteUrl: () => baseUrl,
        serialize: (page, tools) => {
          let priority = 0.5
          const pagePath = tools.resolvePagePath(page)
          if (pagePath === '/') {
            priority = 1
          }
          return {
            url: `${baseUrl}${pagePath}`,
            changefreq: `monthly`,
            priority: priority,
          }
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      // Needs to be last
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            // Opt-out of Google's FLoC
            'Permissions-Policy: interest-cohort=()',
          ],
        },
      },
    },
  ],
}
