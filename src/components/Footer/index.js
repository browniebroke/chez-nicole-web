import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(fab)

const socialLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/ChezNicoleSauclieres/',
  },
  {
    name: 'google',
    url: 'https://goo.gl/maps/d8H73U3N73G2',
  },
  {
    name: 'tripadvisor',
    url:
      'https://www.tripadvisor.fr/Restaurant_Review-g2435151-d5800149-Reviews-Chez_Nicole-Sauclieres_Aveyron_Occitanie.html',
  },
]

const Footer = ({ author, title }) => (
  <div className="footer py-5 small">
    <div className="container">
      <hr className="border-primary" />
      <div className="text-center">
        <ul className="list-inline">
          {socialLinks.map(link => (
            <li className="list-inline-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', link.name]} size="4x" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            Création : <a href="mailto:alla.brunoo@gmail.com">NoLa Design</a>
          </li>
          <li className="list-inline-item">-</li>
          <li className="list-inline-item">
            Logo :{' '}
            <a href="mailto:contact@exodecreation12.fr"> Exode Création</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
