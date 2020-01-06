import React from 'react'
import { FaFacebook, FaGoogle, FaTripadvisor } from 'react-icons/fa'
import Container from './container'

const Footer = () => (
  <div className="footer py-5 small">
    <Container>
      <hr
        className="border-primary"
        style={{
          borderWidth: '3px',
          maxWidth: '50px',
        }}
      />
      <div className="text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/ChezNicoleSauclieres/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="4em" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://goo.gl/maps/d8H73U3N73G2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size="4em" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.tripadvisor.fr/Restaurant_Review-g2435151-d5800149-Reviews-Chez_Nicole-Sauclieres_Aveyron_Occitanie.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTripadvisor size="4em" />
            </a>
          </li>
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
    </Container>
  </div>
)

export default Footer
