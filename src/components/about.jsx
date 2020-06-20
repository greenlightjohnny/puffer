import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Styles from "./about.module.scss"
const About = ({ data }) => (
  <section id="about" className={Styles.intro}>
    <div
      data-sal="slide-left"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className={Styles.top}
    >
      <h2>
        {" "}
        <span className={Styles.under}>About</span>
      </h2>
    </div>
    <div className={Styles.introflex}>
      <div className={Styles.left}>
        <h2>We Are:</h2>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Star City Creative, a fully remote company with people sprinkled
          throughout the US. The majority have ended up in the Roanoke and
          Blacksburg, VA region. We work with clients around the world to create
          unique websites.{" "}
        </p>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Typically we only take on one
          <span className={Styles.out}> new client</span> at a time, allowing us
          to focus all our creative energy and coding into a single project.
          Depending on the project scope and size we will bring in{" "}
          <span className={Styles.out}> outside help </span>
          as needed.
        </p>

        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Our goal to create unique, fast, and user-friendly websites. For this
          we use <span className={Styles.out}>Gatsby</span>, instead of the more
          common WordPress. Gatsby sites load much{" "}
          <span className={Styles.out}>faster</span>, have{" "}
          <span className={Styles.out}> better SEO</span>, are{" "}
          <span className={Styles.out}> more secure</span>, and as a result
          usually end up <span className={Styles.out}> ranking higher</span> in
          Google search results. This translates to more traffic to your
          website, and a higher retention rate due to the blazing fast load
          times and easy to navigate designs.
        </p>
      </div>

      <div
        data-sal="zoom-in"
        data-sal-delay="400"
        data-sal-easing="ease-in"
        data-sal-duration="1000"
        className={Styles.right}
      >
        <h2>Why Pick Us?</h2>

        <div className={Styles.slideagain}>
          <ul>
            <li>
              <span className={Styles.big}>Quality</span> Work. Our sites look
              good AND perform amazing.
            </li>
            <li>
              <span className={Styles.big}>Lower</span> Costs. How? We got rid
              of our office and have 0 management overhead.
            </li>
            <li>
              <span className={Styles.big}>Personal</span> Relationships. We're
              not some massive company.
            </li>
            <li>
              <span className={Styles.big}>Modern</span> Technology.
            </li>
            <li>
              <span className={Styles.big}>Happy</span> People. Everyone is
              passionate about our work, it's more than a job.
            </li>
            <li>
              <span className={Styles.big}>Gatsby.</span> We create static sites
              with Gatsby.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default function Aboutus(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          front: file(relativePath: { eq: "aablack2.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          front2: file(relativePath: { eq: "untilt.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <About data={data} {...props} />}
    />
  )
}
