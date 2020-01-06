import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import Container from '../components/container'

const GalleryPage = props => {
  let { data, location } = props
  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)

  return (
    <Layout
      location={location}
      title="Gallerie"
      description="Pour donner un petit aperçu du menu et des lieux"
    >
      <Container isFluid={true}>
        <div className="my-4">
          <div className="row">
            <div className="col-md-12">
              <h1>Photos</h1>
              <p>Pour donner un petit aperçu du menu et des lieux</p>
              <Gallery images={fullSize} thumbs={thumbs} />
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
    images: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 90
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
