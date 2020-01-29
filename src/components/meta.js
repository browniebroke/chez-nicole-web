import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../gatsby-config'

const Meta = ({ title, description, path, image }) => {
  const pageTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title
  const pageImage = image ? image : siteMetadata.image
  const pageDescription = description ? description : siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang: 'fr',
      }}
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: pageDescription,
        },
        {
          property: 'og:url',
          content: `${siteMetadata.siteUrl}${path}`,
        },
        {
          property: 'og:image',
          content: `${siteMetadata.siteUrl}${pageImage}`,
        },
      ]}
    />
  )
}
export default Meta
