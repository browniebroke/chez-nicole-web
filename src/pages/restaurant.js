import { graphql } from 'gatsby'
import React from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import get from 'lodash/get'
import Img from 'gatsby-image'

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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="La salle de restaurant"
                className="rounded"
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
    file(relativePath: { eq: "img/content/restaurant-original.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
