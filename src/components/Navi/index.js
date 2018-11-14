import React from 'react'
import { Link } from 'gatsby'
import NaviItem from './navi-item'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <React.Fragment>
        <div className="row mx-1">
          <Link to="/" className="navbar-brand">
            <img src="/img/logo.png" alt={title} className="img-fluid" />
          </Link>
        </div>
        <div className="m-b-1">
          <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <NaviItem url="/" location={location}>
                  Accueil
                </NaviItem>
                <NaviItem url="/restaurant/" location={location}>
                  Restaurant
                </NaviItem>
                <NaviItem url="/contact/" location={location}>
                  Contact
                </NaviItem>
                <NaviItem url="/gallery/" location={location}>
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
}

export default Navi
