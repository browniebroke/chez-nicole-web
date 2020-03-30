import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Container from '../components/container'

const SiteIndex = (props) => (
  <Layout path={props.path} title="Acceuil">
    <Container isFluid={true}>
      <div className="my-4">
        <div className="row">
          <div className="col-md-12">
            <h2>Bienvenue Chez Nicole</h2>
            <p>
              Le restaurant bar Chez Nicole est situé à Sauclières, petite
              commune du sud Aveyron. La cuisine y est familiale et sans
              prétentions.
            </p>
            <p>
              Chaque jour affiche un menu différent avec un plat unique et
              équilibré, préparé à base d'ingrédiens frais, locaux si possible,
              mais surtout goûteux. Si toutefois celui-ci ne vous convient pas,
              un plat alternatif vous sera proposé par la patronne.
            </p>
          </div>
          <div className="col-md-12">
            <Img fluid={props.data.file.childImageSharp.fluid} alt="Le Bar" />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "img/content/bar-original.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1700, srcSetBreakpoints: [576, 768, 992, 1200]) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
