import React from "react"
import Styles from "./main.module.scss"
import Fish from "../images/blowfish.svg"
import Navbar from "../components/navbar"

import Form from "../components/form"
import Img from "gatsby-image"
import Rtool from "../images/react.svg"
import Gtool from "../images/gatsby.svg"
import Qtool from "../images/graphql.svg"
import { graphql, Link } from "gatsby"
import Processes from "../components/newprocess"
import Services from "../components/services"
import Why from "../components/why"
import Aboutus from "../components/about"
import Showcase from "../components/showcase"

const Main = props => (
  <div>
    <section id="home" className={Styles.landing}>
      <Navbar />
      <div className={Styles.landingflex}>
        <div className={Styles.title}>
          {" "}
          <h1>
            Puffer<span className={Styles.spantitle}>Fish</span> Labs
          </h1>
          <p>
            <span className={Styles.high}>Custom </span>website development.{" "}
            <br></br> Blazing <span className={Styles.high}>fast</span> load
            times.
            <br></br>
            <span className={Styles.high}>Innovative </span>designs. <br></br>
            Gatsby <span className={Styles.high}>Kool-Aid </span> <br></br>
            Kittens<span className={Styles.high}>*</span> <br></br>
            <Link className={Styles.button1} to="#contact">
              Contact{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </p>
        </div>
        <div className={Styles.fish}>
          <img src={Fish} alt="Cute blowfish cartoon"></img>
          <div className={Styles.bubbles}>
            <div className={Styles.bubble}></div>
          </div>
        </div>
      </div>
    </section>
    <Services />
    <Why />
    <Aboutus />

    <section id="contact" className={Styles.contact}>
      <div className={Styles.contactflex}>
        <h1
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <span className={Styles.under}>Say Hello.</span>
        </h1>
        <p>
          Feel free to reach out with any questions using the contact form
          below.
        </p>
        <Form />
      </div>
    </section>

    <footer className={Styles.footer}>
      <section className={Styles.waves}>
        <svg width="100%" height="200px" fill="none">
          <path
            fill="#1eaedb"
            d="
                M 0 67 
                C 273,183
                  822,-40
                  1920,106 

                V 359 
                H 0 
                V 67 
                Z"
          >
            <animate
              repeatCount="indefinite"
              fill="#454599"
              attributeName="d"
              dur="15s"
              values="
            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z
            "
            ></animate>
          </path>
        </svg>
      </section>
      <div className={Styles.innerfooter}>
        <p>
          Built with{" "}
          <svg
            stroke="currentColor"
            fill="red"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="footer__StyledHeart-vlykoa-4 hTUIdA"
            height="1em"
            width="1em"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
          </svg>{" "}
          and Gatsby
        </p>
        <p>© 2020 Puffer Fish Labs</p>
      </div>
    </footer>
  </div>
)

export const query = graphql`
  query {
    front: file(relativePath: { eq: "aablack2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Main
