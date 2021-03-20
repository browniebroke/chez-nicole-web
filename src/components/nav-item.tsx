import React from 'react'
import { Link } from 'gatsby'

interface NavItemProps {
  currentPath: string
  url: string
}

const NavItem: React.FC<NavItemProps> = ({ currentPath, url, children }) => {
  return (
    <li className={`nav-item${currentPath === url ? ' active' : ''}`}>
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  )
}

export default NavItem
