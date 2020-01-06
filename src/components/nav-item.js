import React from 'react'
import { Link } from 'gatsby'

const NavItem = props => {
  const { currentPath, url, children } = props
  return (
    <li className={`nav-item${currentPath === url ? ' active' : ''}`}>
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  )
}

export default NavItem
