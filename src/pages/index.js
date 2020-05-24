import React from "react"
import Styles from "./main.module.scss"
import Fish from "../images/blowfish.svg"
import Navbar from "../components/navbar"
import Talk from "../images/bluetalk.svg"
import Plan from "../images/plan.svg"
import Comm from "../images/comm.svg"
import Content from "../images/content.svg"
import Form from "../components/form"
import Img from "gatsby-image"
import Rtool from "../images/react.svg"
import Gtool from "../images/gatsby.svg"
import Qtool from "../images/graphql.svg"
import { graphql } from "gatsby"

const Main = props => (
  <div>
    <section className={Styles.landing}>
      <Navbar />
      <div className={Styles.landingflex}>
        <div className={Styles.title}>
          {" "}
          <h1>
            Puffer<span className={Styles.spantitle}>fish</span> Labs
          </h1>
          <p>
            <span className={Styles.high}>Custom </span>website development.{" "}
            <br></br> Blazing <span className={Styles.high}>fast</span> load
            times.
            <br></br>
            <span className={Styles.high}>Innovative </span>designs. <br></br>
            Kittens<span className={Styles.high}>*</span>
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

    <section className={Styles.intro}>
      <div className={Styles.introflex}>
        <div className={Styles.name}>
          <h2 data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
            {" "}
            <span className={Styles.under}>About</span>
          </h2>
          <p
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            data-sal-duration="1000"
          >
            I'm <span className={Styles.out}>Fred Jones</span>, and{" "}
            <span className={Styles.out}> Puffer Fish Labs</span> is my
            freelance <span className={Styles.out}> Web development </span>
            studio. Based out of{" "}
            <span className={Styles.out}>Roanoke, VA </span> and{" "}
            <span className={Styles.out}> Bangkok, Thailand, </span> I work with
            clients around the world to create unique websites.
          </p>
          <p
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            data-sal-duration="1000"
          >
            Typically I only take on one
            <span className={Styles.out}> new client</span> at a time, allowing
            me to focus all my creative energy and coding for a single project.
            Depending on the project scope and size I will bring in{" "}
            <span className={Styles.out}> outside help </span>
            as needed, such as{" "}
            <span className={Styles.out}> graphic designers</span> (often one of
            my <span className={Styles.out}> sisters</span>). I do all the
            coding, usually using React.
          </p>

          <p
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            data-sal-duration="1000"
          >
            My goal is to create a unique, fast, and user friendly websites. For
            this I use <span className={Styles.out}>Gatsby</span>, instead of
            the more common WordPress. Gatsby sites load much{" "}
            <span className={Styles.out}>faster</span>, have{" "}
            <span className={Styles.out}> better SEO</span>, are{" "}
            <span className={Styles.out}> more secure</span>, and as a result
            usually end up <span className={Styles.out}> ranking higher</span>{" "}
            in Google search results. This translates to more traffic to your
            website, and a higher retention rate due to the blazing fast load
            times and easy to navigate designs.
          </p>
        </div>
        <div className={Styles.fish}>
          <Img fluid={props.data.front.childImageSharp.fluid} />
        </div>
      </div>
    </section>

    <section className={Styles.process}>
      <div className={Styles.processcon}>
        <h2 data-sal="zoom-in" data-sal-delay="400" data-sal-easing="ease">
          <span className={Styles.under}>The Process</span>
        </h2>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          This is totally flexible! Because I only have one major project at a
          time, it is extremely easy to implement new requests during the
          development process.
        </p>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img src={Talk} alt="Two people talking at a table"></img>
          </div>
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Initial Consultation
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              In person (if we are close), phone or video calls. We discuss your
              goals for the website, I answer any questions about web
              development. It's always free, and there is zero pressure. Web
              development is my passion, and I am happy to give advice! If I
              don't think I can deliver exactly what you are looking for, I will
              do my best to point you in the correct direction.
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img
              src={Plan}
              alt="Whiteboard with a person pointing at a plan on it"
            ></img>
          </div>
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Proposal
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              Based on our conversation, I send you a proposal with a fixed
              price and estimated timeline. I won't ever run over budget, even
              if I have to eat the costs. During the development process minor
              changes are free, major ones which lengthen the project time can
              be discussed.
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img src={Comm} alt="Texts between two people"></img>
          </div>

          {/* <div className={Styles.processflex}>
            <div className={Styles.processimg}>
              <div className={Styles.processinner}></div>
            </div>
          </div> */}
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Communication
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              During the development you are welcome to be involved as little or
              as much as you would like. Great communication is key, so you will
              be kept updated during the entire process. Because Electric Eel is
              a small studio, your single point of contact is me. Instead of the
              sales department, or a manager, you will be talking directly to
              the person working on your websites. In my opinion this provides
              much better feedback and less chances for miss-communications.
            </p>
          </div>
        </div>
        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img
              src={Content}
              alt="Writing on a wall with a person standing by it"
            ></img>
          </div>
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Quality Content
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              Nothing helps your website rank higher than having high quality
              content. The days of fooling search engines with keyword stuffing
              are long gone. I handle the behind the scenes SEO, such as
              optomized images and fast load times, but it is important to
              remember that delivering what the user searched for is the best
              way to improve your rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={Styles.case}>
      <div className={Styles.casetop}>
        <h2>
          <span className={Styles.under}>Showcase</span>
        </h2>
        <p>Here are a few of some of my past creations.</p>
      </div>
      <div className={Styles.caseflex}>
        <div
          data-sal="slide-down"
          data-sal-delay="100"
          data-sal-easing="ease-in"
          data-sal-duration="500"
          className={Styles.caseinner}
        >
          <div className={Styles.casetitle}>
            <h3>Project Name</h3>
          </div>
          <div className={Styles.caseimg}>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
          </div>
          <div className={Styles.casefooter}>
            <p>
              Info about here more more more more more more more more more more
              more more
            </p>
          </div>
        </div>

        <div
          data-sal="slide-down"
          data-sal-delay="700"
          data-sal-easing="ease-in"
          data-sal-duration="500"
          className={Styles.caseinner}
        >
          <div className={Styles.casetitle}>
            <h3>Project Name</h3>
          </div>
          <div className={Styles.caseimg}>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
          </div>
          <div className={Styles.casefooter}>
            <p>
              Info about here more more more more more more more more more more
              more more
            </p>
          </div>
        </div>

        <div
          data-sal="slide-down"
          data-sal-delay="1000"
          data-sal-easing="ease"
          data-sal-duration="500"
          className={Styles.caseinner}
        >
          <div className={Styles.casetitle}>
            <h3>Project Name</h3>
          </div>
          <div className={Styles.caseimg}>
            <Img fluid={props.data.front2.childImageSharp.fluid} />
          </div>
          <div className={Styles.casefooter}>
            <p>
              Info about here more more more more more more more more more more
              more more
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <section className={Styles.showcase}>
      <div className={Styles.showcaseflex}>
        <h2 data-sal="zoom-in" data-sal-delay="400" data-sal-easing="ease">
          Showcase
        </h2>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Name
            </h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Name
            </h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Name
            </h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Name
            </h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Name
            </h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div></div>
      </div>
    </section> */}
    <section className={Styles.tech}>
      <div className={Styles.techflex}>
        <h2 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          <span className={Styles.under}>Our Tools</span>
        </h2>
        <div className={Styles.tools}>
          <img src={Rtool} />
          <img src={Gtool} />
          <img src={Qtool} />
        </div>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Our primary development tool is{" "}
          <span className={Styles.high}> Gatsby</span>, a very new static site
          generator. Behind the scenes, it is a huge change from your typical
          server rendered WordPress and PHP developed website. WordPress first
          sends a request to a database when a user requests the site, and
          renders an HTML page to the user from that. Gatsby generates static
          HTML pages ahead of time, and serves those directly to the user when a
          request is made. The advantages of static site generators such as
          Gatsby are massive. Better Reliability, less complexity, faster load
          times, enhanced SEO, and superior security to name a few. <br></br>
          <br></br>
          So how come everyone is not using Gatsby and other static site
          generators instead of WordPress? A few reasons, the first being that
          Gatsby is a new technology. Not as many people know about it, or how
          to use it. Second, many clients are only familiar with WordPress and
          request it without looking at other options. Third, because creating a
          Gatsby site requires the developer to know Gatsby, React, and GraphQL
          (all new technology) there are not as many Gatsby developers out
          there. Finally, the cost of a Gatsby site is generally more than
          someone reusing an old WordPress theme. For most clients the
          additional initial development cost of Gatsby is returned quickly
          through higher search engine rankings and increased customer
          retention.
        </p>
      </div>

      <div className={Styles.techflex}>
        <h3 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          Less Complexity
        </h3>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Once a Gatsby site is created there are less "moving parts", which
          instantly makes it more reliable. There is no back end server
          required.
        </p>
      </div>
      <div className={Styles.techflex}>
        <h3 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          GO FAST
        </h3>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          How fast your website loads matters a massive amount. x number of
          people will abandon a website if it takes longer than x seconds to
          load. Gatsby is offers blazing fast load times, and automatically
          optimizes images no matter what size screen the user has. Gatsby also
          works in the background to pre-fetch different pages of the website,
          so that when the user clicks an internal link the load time is
          virtually instant. Fast websites also rank higher in Google searches,
          improving your SEO.
        </p>
      </div>
      <div className={Styles.techflex}>
        <h3 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          SEO
        </h3>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Guess what? Turns out that load times factor into how Google ranks
          websites in search results. Excellent news if you are using Gatsby.
          Terrible news if you are still using the dinosaur that is WordPress.
          Even better, since Gatsby is pre made, it is much easier for robots to
          crawl it much easier than server rendered websites (such as
          WordPress). This also helps connect users to the content they were
          searching for. How much of a boost does Google give for fast load
          times? No one knows.
        </p>
      </div>

      <div className={Styles.techflex}>
        <h3 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          Reliability
        </h3>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          Static site generators such as Gatsby are inherently more reliable.
          There is no database server that can fail, less risk over overloading
          the site processing requests, and less risk of being hacked. They are
          easily delivered by CDN's
        </p>
      </div>
    </section>

    <section className={Styles.contact}>
      <div className={Styles.contactflex}>
        <h1 data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease">
          <span className={Styles.under}>Contact</span>
        </h1>
        <p>
          Feel free to reach out with any questions using the contact form
          below.
        </p>
        <Form />
      </div>
    </section>

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

    <footer className={Styles.footer}>
      <div className={Styles.innerfooter}>
        <p>
          Built with{" "}
          <svg
            stroke="currentColor"
            fill="red"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="footer__StyledHeart-vlykoa-4 hTUIdA"
            height="1em"
            width="1em"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
          </svg>{" "}
          and Gatsby
        </p>
        <p>© 2020 Fred Jones</p>
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

    front2: file(relativePath: { eq: "min.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Main
