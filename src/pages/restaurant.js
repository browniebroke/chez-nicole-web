import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Container from '../components/container'

const Restaurant = (props) => (
  <Layout
    path={props.path}
    title="Restaurant"
    description="Quelques details sur notre restaurant, heure d'ouvertures et menu"
  >
    <StaticImage
      src="../assets/restaurant-artistique.jpg"
      alt="La salle de restaurant"
      placeholder="blurred"
      width={1700}
      height={800}
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
