import React from 'react'
import { Link } from 'gatsby'

const NavItem = props => {
  const { location, url, children } = props
  return (
    <li className={location === url ? 'nav-item active' : 'nav-item'}>
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  )
}

export default NavItem
