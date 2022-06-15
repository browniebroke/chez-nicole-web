import React from 'react'
import { Link } from 'gatsby'

import { NavItem } from './nav-item'

import siteLogo from '../assets/logos/logo.png'

interface NavProps {
  currentPath: string
}

export const Nav: React.FC<NavProps> = ({ currentPath }) => {
  return (
    <>
      <div className="row mx-1">
        <Link to="/" className="navbar-brand">
          <img src={siteLogo} alt="Logo du restaurant" className="img-fluid" />
        </Link>
      </div>
      <div className="m-b-1">
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <NavItem url="/" currentPath={currentPath}>
                Accueil
              </NavItem>
              <NavItem url="/restaurant/" currentPath={currentPath}>
                Restaurant
              </NavItem>
              <NavItem url="/contact/" currentPath={currentPath}>
                Contact
              </NavItem>
              <NavItem url="/photos/" currentPath={currentPath}>
                Photos
              </NavItem>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </nav>
      </div>
    </>
  )
}
