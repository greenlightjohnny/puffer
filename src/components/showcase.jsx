import React from "react"
import Styles from "./showcase.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Showcase = ({ data }) => (
  <section id="showcase" className={Styles.case}>
    <div className={Styles.casetop}>
      <h2
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <span className={Styles.under}>Showcase</span>
      </h2>
      <p>
        Some of our past work we can share, hopefully we can feature yours one
        day! Woo
      </p>
    </div>
    <div className={Styles.caseflex}>
      <div
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-easing="ease-in"
        data-sal-duration="500"
        className={Styles.caseinner}
      >
        <div className={Styles.casetitle}>
          <h3>Minimal Gap</h3>
        </div>
        <div className={Styles.caseimg}>
          <Img objectFit="cover" fluid={data.front.childImageSharp.fluid} />
        </div>
        <div className={Styles.casefooter}>
          <p>Bee Keeping</p>
        </div>
      </div>

      <div
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease-in"
        data-sal-duration="750"
        className={Styles.caseinner}
      >
        <div className={Styles.casetitle}>
          <h3>React Portfolio</h3>
        </div>
        <div className={Styles.caseimg}>
          <Img objectFit="cover" fluid={data.front2.childImageSharp.fluid} />
        </div>
        <div className={Styles.casefooter}>
          <p>
            Info about here more more more more more more more more more more
            more more
          </p>
        </div>
      </div>

      <div
        data-sal="zoom-in"
        data-sal-delay="600"
        data-sal-easing="ease-in"
        data-sal-duration="1000"
        className={Styles.caseinner}
      >
        <div className={Styles.casetitle}>
          <h3>her2.me</h3>
        </div>
        <div className={Styles.caseimg}>
          <Img objectFit="cover" fluid={data.front3.childImageSharp.fluid} />
        </div>
        <div className={Styles.casefooter}>
          <p>
            Info about here mmoreee ore more more more more more more more more
            more more more
          </p>
        </div>
      </div>
    </div>

    {/* <div className={Styles.flexcon}>
      <div>
        <div className={Styles.box}>
          {" "}
          <Img
            objectFit="cover"
            style={{ height: `600px`, width: `500px` }}
            fluid={data.front.childImageSharp.fluid}
          />
          <div className={Styles.imgtext}>
            <h4>Name</h4>
          </div>
        </div>
      </div>
      <div>
        <div className={Styles.box}>
          {" "}
          <Img
            objectFit="cover"
            style={{ height: `600px`, width: `500px` }}
            fluid={data.front2.childImageSharp.fluid}
          />
          <div className={Styles.imgtext}>
            <h4>Name</h4>
          </div>
        </div>
      </div>
      <div>
        <div className={Styles.box}>
          {" "}
          <Img
            objectFit="cover"
            style={{ height: `600px`, width: `500px` }}
            fluid={data.front3.childImageSharp.fluid}
          />
          <div className={Styles.imgtext}>
            <h4>Name</h4>
          </div>
        </div>
      </div>
    </div> */}
  </section>
)

export default function Myshowcase(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          front: file(relativePath: { eq: "min2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          front2: file(relativePath: { eq: "face2.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          front3: file(relativePath: { eq: "her2.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Showcase data={data} {...props} />}
    />
  )
}
