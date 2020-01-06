import React from 'react'

import Nav from './nav'
import Footer from './footer'
import Container from './container'
import { siteMetadata } from '../../gatsby-config'

import 'scss/gatstrap.scss'

const Layout = props => {
  const { children } = props
  return (
    <Container isMain={true}>
      <Nav title={siteMetadata.title} {...props} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </Container>
  )
}

export default Layout
