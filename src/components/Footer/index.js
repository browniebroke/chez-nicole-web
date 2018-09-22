import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer py-5 small">
    <div className="container">
      <hr className="border-primary" />
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
