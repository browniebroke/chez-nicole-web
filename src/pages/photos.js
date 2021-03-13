import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'

import Layout from '../components/layout'
import Container from '../components/container'

const GalleryPage = ({ data, path }) => {
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  return (
    <Layout
      path={path}
      title="Gallerie"
      description="Pour donner un petit aperçu du menu et des lieux"
    >
      <Container isFluid={true}>
        <div className="my-4">
          <div className="row">
            <div className="col-md-12">
              <h1>Photos</h1>
              <p>Pour donner un petit aperçu du menu et des lieux</p>
              <Gallery images={images} lightboxOptions={lightboxOptions} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            full: fluid(
              maxWidth: 1024
              quality: 90
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
