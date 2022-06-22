import React from 'react'
import { Link } from 'gatsby'

interface NavItemProps {
  children?: React.ReactNode
  currentPath: string
  url: string
}

export const NavItem = ({ children, currentPath, url }: NavItemProps) => {
  return (
    <li className={`nav-item${currentPath === url ? ' active' : ''}`}>
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  )
}
