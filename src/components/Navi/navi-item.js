import React from 'react'
import { Link } from 'gatsby'

class NaviItem extends React.Component {
  render() {
    const { location, url, children } = this.props

    return (
      <li
        className={location.pathname === url ? 'nav-item active' : 'nav-item'}
      >
        <Link to={url} className="nav-link">
          {children}
        </Link>
      </li>
    )
  }
}

export default NaviItem
