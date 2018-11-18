import { graphql } from 'gatsby'
import React from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import get from 'lodash/get'

const Restaurant = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta
        site={get(data, 'site.meta')}
        title="Restaurant"
        location={location}
      />
      <div className="container-fluid">
        <div className="my-4">
          <div className="row">
            <div className="col-md-12">
              <h2>Le Restaurant</h2>
              <p>
                Le restaurant est ouvert entre 12h et 14h et de 19h à 21h. Nous
                vous conseillons de réserver pour les groupes de plus de 10
                personnes.
              </p>
            </div>
          </div>
          <div className="row">
            <div id="TA_selfserveprop" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <img
                alt="Restaurant"
                className="img-fluid rounded mx-auto d-block"
                src="/img/content/restaurant-original.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Restaurant

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        image
      }
    }
  }
`
