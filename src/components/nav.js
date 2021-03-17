import React from 'react'
import { Link } from 'gatsby'
import NaviItem from './nav-item'

import siteLogo from '../assets/logos/logo.png'

const Nav = (props) => {
  const currentPath = props.currentPath
  return (
    <React.Fragment>
      <div className="row mx-1">
        <Link to="/" className="navbar-brand">
          <img src={siteLogo} alt="Logo du restaurant" className="img-fluid" />
        </Link>
      </div>
      <div className="m-b-1">
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <NaviItem url="/" currentPath={currentPath}>
                Accueil
              </NaviItem>
              <NaviItem url="/restaurant/" currentPath={currentPath}>
                Restaurant
              </NaviItem>
              <NaviItem url="/contact/" currentPath={currentPath}>
                Contact
              </NaviItem>
              <NaviItem url="/photos/" currentPath={currentPath}>
                Photos
              </NaviItem>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Nav
