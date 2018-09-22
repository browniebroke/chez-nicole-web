import React from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import get from 'lodash/get'

const Restaurant = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} title="Contact" />
      <div className="container-fluid">
        <div className="my-4">
          <div className="row">
            <div className="col-md-12 my-3">
              <h2>Contactez nous</h2>
              <p>N'hesitez pas à nous contacter par téléphone ou email:</p>
              <p>
                Chez Nicole
                <br />
                8, Place de l'église
                <br />
                12230 Sauclières
                <br />
                05 65 78 21 32
                <br />
                <a href="mailto:chez.nicole@orange.fr">chez.nicole@orange.fr</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 my-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d6988.097985223717!2d3.364246626387233!3d43.976271811523404!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c6ffd644422fb49!2sChez+Nicole!5e1!3m2!1sen!2sus!4v1537623990397"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Restaurant
