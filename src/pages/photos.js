import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import get from 'lodash/get'
import 'react-image-lightbox/style.css'

class GalleryPage extends Component {
  render() {
    let { data, location } = this.props
    const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
    const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)

    return (
      <Layout location={location}>
        <Meta
          site={get(data, 'site.meta')}
          title="Gallerie"
          location={location}
        />
        <div className="container-fluid">
          <div className="my-4">
            <div className="row">
              <div className="col-md-12">
                <h1>Gallerie de photos</h1>
                <p>Voici quelques photos des lieux</p>
                <Gallery
                  images={fullSize}
                  thumbs={thumbs}
                  colClass="col-4 col-md-3"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default GalleryPage

export const pageQuery = graphql`
  query ImagesForGallery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        image
      }
    }
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
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
