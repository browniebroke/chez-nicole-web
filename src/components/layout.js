import React from 'react'

import Nav from './nav'
import Footer from './footer'
import Container from './container'

import '../scss/gatstrap.scss'
import Meta from './meta'

const Layout = props => {
  const { children, title, description, location } = props
  return (
    <React.Fragment>
      <Meta title={title} location={location} description={description} />
      <Container isMain={true}>
        <Nav {...props} />
        {children}
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout
