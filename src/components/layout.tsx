import React from 'react'

import Nav from './nav'
import Footer from './footer'
import Container from './container'
import Meta from './meta'

import '../scss/gatstrap.scss'

interface LayoutProps {
  path: string
  title: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  path,
  description,
}) => {
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
