import React from 'react'

import Nav from './nav'
import Footer from './footer'
import { siteMetadata } from '../../gatsby-config'

import 'scss/gatstrap.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="container main-container">
        <Nav title={siteMetadata.title} {...this.props} />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
