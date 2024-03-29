import { graphql } from 'gatsby'
import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'

import { Layout } from '../components/layout'
import { Container } from '../components/container'

interface ImageInGallery {
  node: {
    childImageSharp: {
      full: IGatsbyImageData
      thumb: IGatsbyImageData
    }
  }
}

interface GalleryPageProps {
  path: string
  data: {
    allFile: {
      edges: ImageInGallery[]
    }
  }
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data, path }) => {
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
      title="Photos"
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
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            full: gatsbyImageData(layout: FULL_WIDTH)
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
