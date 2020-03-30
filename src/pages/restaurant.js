import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Container from '../components/container'

const Restaurant = (props) => (
  <Layout
    path={props.path}
    title="Restaurant"
    description="Quelques details sur notre restaurant, heure d'ouvertures et menu"
  >
    <Img
      fluid={props.data.file.childImageSharp.fluid}
      alt="La salle de restaurant"
      className="img-fluid"
    />
    <Container isFluid={true}>
      <div className="my-4">
        <div className="row">
          <div className="col-md-12">
            <h2>Le Restaurant</h2>
            <p>
              Le restaurant est ouvert la plupart de l'année entre 12h et 14h,
              et les soirs de week-end de 19h à 21h. En période estivale, nous
              ouvrons aussi le soir en semaine. Fermeture hebdomadaire le Jeudi.
            </p>
            <p>
              Pour les groupes de plus de 10 personnes, nous vous conseillons de
              réserver en avance.
            </p>
            <h3 className="text-center mt-5">Menu</h3>
            <p>
              Nous offrons un menu unique à 13,50€ avec entrée + plat du jour +
              dessert ou fromage avec 1/4l de vin.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Restaurant

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "img/content/restaurant-artistique.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1700
          maxHeight: 800
          cropFocus: SOUTH
          srcSetBreakpoints: [576, 768, 992, 1200]
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
