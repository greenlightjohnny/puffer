import React from "react"
import Button from "./button"
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
          Star City Creative, a new small business serving the NRV Region. I'm
          Fred, the founder, and I am lucky to have a few close friends and a
          sister as my partners. I founded this company with the belief that we
          could provide modern, super fast, websites at a lower cost than the
          bigger agencies AND provide better customer support at the same time.
        </p>
        <p>
          Instead of charging a large up front fee (typically 3k-40k) along with
          a contract and monthly fee, we only charge a monthly fee with no
          contract. For a small business, a large upfront cost can be a huge
          burden (we know, we are a small business!). We also don't have
          contracts. Maybe you take a new job out of State and leave your
          business, you won't be stuck paying for a year of service you don't
          use. Read more about our company and philosophy: <br></br>
          <Button url="meet">Company</Button>
        </p>

        <p
        // data-sal="fade"
        // data-sal-delay="400"
        // data-sal-easing="ease-in"
        // data-sal-duration="1000"
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
          times and easy to navigate designs. Read more about the advantages of
          our technology: <br></br>{" "}
          <Button contact="#technology">Technology</Button>
        </p>
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
