import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Container from '../components/container'

const SiteIndex = ({ path }) => (
  <Layout path={path} title="Acceuil">
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
            <StaticImage
              src="../assets/bar-original.jpg"
              alt="Le bar"
              placeholder="blurred"
              width={1700}
            />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
)

export default SiteIndex
