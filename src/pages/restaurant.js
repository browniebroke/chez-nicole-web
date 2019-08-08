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

      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="La salle de restaurant"
        className="img-fluid"
      />
      <div className="container-fluid">
        <div className="my-4">
          <div className="row">
            <div className="col-md-12">
              <h2>Le Restaurant</h2>
              <p>
                Le restaurant est ouvert la plupart de l'année entre 12h et 14h,
                et les soirs de week-end de 19h à 21h. En période estivale, nous
                ouvrons aussi le soir en semaine. Fermeture hebdomadaire le
                Jeudi.
              </p>
              <p>
                Pour les groupes de plus de 10 personnes, nous vous conseillons
                de réserver en avance.
              </p>
              <h3 className="text-center mt-5">Menu</h3>
              <p>
                Nous offrons un menu unique à 13,50€ avec entrée + plat du jour
                + dessert ou fromage avec 1/4l de vin.
              </p>
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
    file(relativePath: { eq: "img/content/restaurant-artistique.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1700, maxHeight: 800, cropFocus: SOUTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
