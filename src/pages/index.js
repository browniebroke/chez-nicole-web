import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const SiteIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} title="Acceuil" location={location} />
      <div className="container-fluid">
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
                équilibré, préparé à base d'ingrédiens frais, locaux si
                possible, mais surtout goûteux. Si toutefois celui-ci ne vous
                convient pas, un plat alternatif vous sera proposé par la
                patronne.
              </p>
            </div>
            <div className="col-md-12 text-center">
              <img
                src="/img/content/bar-original.jpg"
                alt="Le bar"
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query IndexQuery {
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
