import React from "react"
import Navbar from "../components/navbar"
import Styles from "./main.module.scss"
import Yow from "./meet.module.scss"
const meet = () => {
  return (
    <main>
      <Navbar />
      <div className={Yow.mcon}>
        <h2>
          {" "}
          <span className={Yow.under}>About Our Company</span>
        </h2>
        <div className={Yow.flex}>
          <div className={Yow.flexitem}>
            <h3>Our Plan</h3>
            <p>
              How do we get away with not charging a large upfront fee for
              building websites? Well, we view it as in investment. We want to
              keep you with us as a happy customer for as long as possible. We
              really don't profit much from a new customer the first year they
              are with us. However, we believe in our work so much that we think
              most business owners will stick with us.
            </p>
          </div>
          <div className={Yow.flexitem}>
            <h3>Why We Started</h3>
            <p>
              After being employees of large agencies creating websites, we
              noticed a trend of a large up front costs to the customer, and
              sub-par customer service after the site was up and running. We
              realized that a large portion of the up front costs was going
              directly to the company overhead. Rent, human resources, project
              managers, and of course the CEO. The employees actually building
              the websites were people like me and my partners, programmers,
              UI/UX designers, and artists. We think that we will be able to
              provide better service at a lower cost to our customers and at the
              same time more revenue for our us by cutting out the overhead. No
              office (for now), no human resources, no CEO, and no project
              managers.
            </p>
          </div>
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
                <span className={Styles.big}>Personal</span> Relationships.
                We're not some massive company.
              </li>
              <li>
                <span className={Styles.big}>Modern</span> Technology.
              </li>
              <li>
                <span className={Styles.big}>Happy</span> People. Everyone is
                passionate about our work, it's more than a job.
              </li>
              <li>
                <span className={Styles.big}>Gatsby.</span> We create static
                sites with Gatsby.
              </li>
            </ul>
          </div>
        </div>

        <div className={Styles.left}>
          <h2>For Everyone?</h2>
          <p>
            We won't try and sell you on a service we honestly don't think will
            benefit you. Yes, our websites are faster, more secure, and have
            better SEO. But guess what? Sometimes you don't need all that. If
            you have a local small business with no competition, your website
            should have no trouble ranking the highest no matter how slow it is.
            You don't need a super fancy, awesome looking, fully optimized
            website if you are the only game in town and don't sell anything
            online.{" "}
          </p>
        </div>

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
      </div>
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
    </main>
  )
}

export default meet
