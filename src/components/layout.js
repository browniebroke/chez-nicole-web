import React from 'react'

import Nav from './nav'
import Footer from './footer'
import Container from './container'

import '../scss/gatstrap.scss'
import Meta from './meta'

const Layout = (props) => {
  const { children, title, description, path } = props
  return (
    <React.Fragment>
      <Meta title={title} path={path} description={description} />
      <Container isMain={true}>
        <Nav currentPath={path} />
        {children}
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout
