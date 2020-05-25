import React from "react"
import Styles from "./services.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Services = props => (
  <section className={Styles.main}>
    <div className={Styles.maintitle}>
      <h2 data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
        {" "}
        <span className={Styles.under}>Services</span>
      </h2>
    </div>
    <div className={Styles.mainflex}>
      <a className={Styles.go} href="#">
        <div className={Styles.flexitem}>
          <img className={Styles.cardtop}></img>
          <div className={Styles.cardbottom}>
            <h3>Web Development</h3>
            <p>We bring ideas to life</p>
          </div>
        </div>
      </a>
      <a className={Styles.go} href="#">
        <div className={Styles.flexitem}>
          <Img fluid={props.data.front.childImageSharp.fluid} />
          <div className={Styles.cardbottom}>
            <h3>Web Development</h3>
            <p>We bring ideas to life</p>
          </div>
        </div>
      </a>
      <a className={Styles.go} href="#">
        <div className={Styles.flexitem}>
          <img className={Styles.cardtop}></img>
          <div className={Styles.cardbottom}>
            <h3>Web Development</h3>
            <p>We bring ideas to life</p>
          </div>
        </div>
      </a>
    </div>
  </section>
)

export const query = graphql`
  query {
    front: file(relativePath: { eq: "design.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front2: file(relativePath: { eq: "min.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Services
