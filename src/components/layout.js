import React from 'react'

import Nav from './nav'
import Footer from './footer'
import { siteMetadata } from '../../gatsby-config'

import 'scss/gatstrap.scss'

const Layout = props => {
  const { children } = props
  return (
    <div className="container main-container">
      <Nav title={siteMetadata.title} {...props} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
