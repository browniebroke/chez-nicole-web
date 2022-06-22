import React from 'react'

import { Nav } from './nav'
import { Footer } from './footer'
import { Container } from './container'
import { Meta } from './meta'

import '../scss/gatstrap.scss'

interface LayoutProps {
  children?: React.ReactNode
  path: string
  title: string
  description?: string
}

export const Layout = ({ children, title, path, description }: LayoutProps) => {
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
