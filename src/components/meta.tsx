import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

interface MetaProps {
  path: string
  title: string
  description?: string
}

const Meta: React.FC<MetaProps> = ({ title, path, description }) => {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        defaultImage: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              transformOptions: { fit: COVER, cropFocus: CENTER }
              formats: [PNG]
            )
          }
        }
      }
    `
  )

  const pageImage = getImage(defaultImage)?.images?.fallback?.src
  const pageDescription = description
    ? description
    : site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang: 'fr',
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          name: `og:locale`,
          content: 'fr',
        },
        {
          property: 'og:description',
          content: pageDescription,
        },
        {
          property: 'og:url',
          content: `${site.siteMetadata.siteUrl}${path}`,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${pageImage}`,
        },
      ]}
    />
  )
}
export default Meta
