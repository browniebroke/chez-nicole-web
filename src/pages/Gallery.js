import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import get from 'lodash/get'
import './gallery_style.scss'
import Lightbox from 'react-image-lightbox'
// import 'react-image-lightbox/style.css'
import 'react-image-lightbox/src/style.css'

class Gallery extends Component {
  constructor(props) {
    super(props)

    const images = props.data.allFile.edges.map(
      edge => edge.node.childImageSharp.original.src
    )
    const thumbs = props.data.allFile.edges.map(
      edge => edge.node.childImageSharp.resize.src
    )

    this.state = {
      index: 0,
      isOpen: false,
      images: images,
      thumbs: thumbs,
    }

    this.renderLightBox = this.renderLightBox.bind(this)
    this.openLightBox = this.openLightBox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.moveToIndex = this.moveToIndex.bind(this)
    this.movePrev = this.movePrev.bind(this)
    this.moveNext = this.moveNext.bind(this)
  }

  openLightBox(index) {
    this.setState({
      index: index,
      isOpen: true,
    })
  }

  renderLightBox() {
    const { images, thumbs } = this.state
    return (
      <Lightbox
        mainSrc={images[this.state.index]}
        nextSrc={images[(this.state.index + 1) % images.length]}
        prevSrc={images[(this.state.index + images.length - 1) % images.length]}
        mainSrcThumbnail={thumbs[this.state.index]}
        nextSrcThumbnail={thumbs[(this.state.index + 1) % images.length]}
        prevSrcThumbnail={
          thumbs[(this.state.index + images.length - 1) % images.length]
        }
        onCloseRequest={this.closeLightbox}
        onMovePrevRequest={this.movePrev}
        onMoveNextRequest={this.moveNext}
      />
    )
  }

  closeLightbox() {
    this.setState({ isOpen: false })
  }

  moveToIndex(index) {
    this.setState({
      index,
    })
  }

  movePrev() {
    this.moveToIndex((this.state.index - 1) % this.state.images.length)
  }

  moveNext() {
    this.moveToIndex((this.state.index + 1) % this.state.images.length)
  }

  render() {
    let { data, location } = this.props

    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="Gallerie" />
        <div className="container-fluid">
          <div className="my-4">
            <div className="row">
              <div className="col-md-12">
                <h1>Gallerie de photos</h1>
                <p>Voici quelques photos des lieux</p>
                <div className="row">
                  {this.state.thumbs.map((thumbnail, index) => {
                    return (
                      <div className="col-md-3 col-sm-6" key={index}>
                        <div
                          className="m-1"
                          style={{
                            width: '100%',
                            paddingTop: '100%',
                          }}
                          onClick={() => this.openLightBox(index)}
                        >
                          <span
                            className="img-square-bg-image"
                            style={{ backgroundImage: `url(${thumbnail})` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
                {this.state.isOpen && this.renderLightBox()}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Gallery

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          id
          childImageSharp {
            original {
              src
              width
            }
            resize {
              src
              width
            }
          }
        }
      }
    }
  }
`
