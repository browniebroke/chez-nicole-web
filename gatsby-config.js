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
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126206092-1',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
  ],
}
