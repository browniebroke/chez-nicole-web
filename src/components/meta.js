import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Meta = ({ site, title, location, image }) => {
  const siteTitle = 'Chez Nicole'
  title = title ? `${title} | ${siteTitle}` : siteTitle
  image = image ? image : site.image
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `@${get(site, 'twitter')}`,
        },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: get(site, 'description'),
        },
        {
          property: 'og:url',
          content: `${get(site, 'siteUrl')}${location.pathname}`,
        },
        {
          property: 'og:image',
          content: `${get(site, 'siteUrl')}${image}`,
        },
      ]}
    />
  )
}
export default Meta
