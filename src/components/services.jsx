import React from "react"
import Styles from "./services.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Pics from "../images/design.png"
import Des from "../images/des.png"
import Des2 from "../images/des2.png"

const Services = ({ data }) => (
  <section id="services" className={Styles.main}>
    <div
      data-sal="slide-left"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="400"
      className={Styles.maintitle}
    >
      <h2>
        {" "}
        <span className={Styles.under}>Services</span>
      </h2>
    </div>
    <div className={Styles.mainflex}>
      <a
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-easing="ease-in"
        data-sal-duration="500"
        className={Styles.go}
        href="#"
      >
        <div className={Styles.flexitem}>
          <img className={Styles.cardtop} src={Pics}></img>
          <div className={Styles.cardbottom}>
            <h3>Web Development</h3>
            <p>
              We bring ideas to life with Gatsby powered greatness. We are
              focused on creating awesome looking and super fast loading
              websites.
            </p>
          </div>
        </div>
      </a>
      <a
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease-in"
        data-sal-duration="750"
        className={Styles.go}
        href="#"
      >
        <div className={Styles.flexitem}>
          <img className={Styles.cardtop} src={Des}></img>
          <div className={Styles.cardbottom}>
            <h3>Design</h3>
            <p>
              We take a mobile first design approach with unique styling.
              Responsive, eye catching, and{" "}
            </p>
          </div>
        </div>
      </a>
      <a
        data-sal="zoom-in"
        data-sal-delay="800"
        data-sal-easing="ease-in"
        data-sal-duration="1000"
        className={Styles.go}
        href="#"
      >
        <div className={Styles.flexitem}>
          <img className={Styles.cardtop} src={Des2}></img>
          <div className={Styles.cardbottom}>
            <h3>SEO</h3>
            <p>
              Need a comprehensive review of your online presence? We are here
              to help! Social media, SEO, marketing, and branding we do it all.{" "}
            </p>
          </div>
        </div>
      </a>
    </div>
    <div
      data-sal="zoom-in"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className={Styles.callus}
    >
      <p>
        <span className={Styles.big}>Questions?</span> Feel free to ask us
        anything! We are always happy to answer any questions.
        <span className={Styles.yellowhigh}> </span>. -{" "}
      </p>
      <Link className={Styles.button1} to="#contact">
        Contact{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 19"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  </section>
)

export default function Myservices(props) {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => <Services data={data} {...props} />}
    />
  )
}
