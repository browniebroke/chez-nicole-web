import React from 'react'
import { IconType } from 'react-icons/lib'

interface SocialLinkItemProps {
  url: string
  label: string
  logo: IconType
}

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({
  url,
  label,
  logo,
}) => {
  return (
    <li className="list-inline-item">
      <a
        href={url}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {React.createElement(logo, { size: '4em' })}
      </a>
    </li>
  )
}

export default SocialLinkItem
