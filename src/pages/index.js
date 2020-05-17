import React from "react"
import Styles from "./main.module.scss"
import Fish from "../images/blowfish.svg"
import Navbar from "../components/navbar"
export default () => (
  <div>
    <section className={Styles.landing}>
      <Navbar />
      <div className={Styles.landingflex}>
        <div className={Styles.title}>
          {" "}
          <h1>
            Blow<span className={Styles.spantitle}>fish</span> Studios
          </h1>
          <p>
            <span className={Styles.high}>Custom </span>website development.{" "}
            <br></br> Blazing <span className={Styles.high}>fast</span> load
            times.
            <br></br>
            <span className={Styles.high}>Innovative </span>designs.
          </p>
        </div>
        <div className={Styles.fish}>
          <img src={Fish} alt="Cute blowfish cartoon"></img>
        </div>
      </div>
    </section>

    <section className={Styles.intro}>
      <div className={Styles.introflex}>
        <div className={Styles.name}>
          <h2>Electric Eel</h2>
          <p>
            I'm <strong>Fred Jones</strong> and Electric Eel is my freelance{" "}
            <strong>Web Development</strong> studio. Based out of{" "}
            <strong>Roanoke, VA</strong>
            and <strong>Bangkok, Thailand</strong> I work with clients around
            the world to create unique websites.
          </p>
          <p>
            Typically I only take on <strong>one new client project</strong> at
            a time, allowing me to focus all my creative energy and coding for a
            single project.
          </p>
          <p>
            My goals are to create a unique, fast, and user friendly website.
            For this I use <strong>Gatsby</strong>, instead of the more common
            WordPress. Gatsby sites load much <strong>faster</strong>, have{" "}
            <strong>better SEO</strong>, are <strong>More Secure</strong>, and
            as a result typically end up <strong>ranking higher</strong> in
            Google search results. This translates to more traffic to your
            website, and a higher retention rate due to the Blazing fast load
            times and easy to navigate designs.
          </p>
        </div>
        <div className={Styles.fish}>
          <img src={Fish} alt="Cute blowfish cartoon"></img>
        </div>
      </div>
    </section>

    <section className={Styles.process}>
      <div className={Styles.processcon}>
        <h2>The Process</h2>
        <p>
          This is totally flexible! Because I only have one major project at a
          time, it is extremely easy to implement new requests during the
          development process.
        </p>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Initial Consultation</h3>
            <p>
              In person (if we are close), phone or video calls. We discuss your
              goals for the website, I answer any questions about web
              development. It's always free, and there is zero pressure. Web
              development is my passion, and I am happy to give advice!
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Project Proposal</h3>
            <p>
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
            <div className={Styles.processinner}></div>
          </div>

          <div className={Styles.processflex}>
            <div className={Styles.processimg}>
              <div className={Styles.processinner}></div>
            </div>
            <div className={Styles.processinfo}>
              <h3>Design</h3>
              <p>
                No set criteria here. You can have your own design ready to go,
                a general outline of what you are looking for, or absolutely no
                idea. I can even rebuild existing websites to perform better and
                look more modern.
              </p>
            </div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Communication</h3>
            <p>
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
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Quality Content</h3>
            <p>
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

    <section className={Styles.showcase}>
      <div className={Styles.showcaseflex}>
        <h2>Showcase</h2>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3>Project Name</h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3>Project Name</h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3>Project Name</h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3>Project Name</h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div className={Styles.showcaseflex2}>
          <div className={Styles.showcasetitle}>
            <h3>Project Name</h3>
            <p>Lorem lorem lorem lorem lorem</p>
          </div>
          <div className={Styles.showcaseimg}>
            <div className={Styles.showcaseinner}></div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
    <section className={Styles.tech}>
      <div className={Styles.techflex}>
        <h2>Our Technology</h2>
        <p>
          Our primary development tool is Gatsby, a very new static site
          generator. Behind the scenes, it is a huge change from your typical
          \\\\\\\\\\ WordPress PHP developed website.
        </p>
      </div>
      <div className={Styles.techflex}>
        <h3>SPEED</h3>
        <p>
          How fast your website loads matters a massive amount. x number of
          people will abandon a website if it takes longer than x seconds to
          load. Large, unptomized websites with a ton of useless plugins are
          slow to load, and lose potential customers. Gatsby, unlike WordPress,
          solves a large part of this by preparing the website to send ahead of
          time.
        </p>
      </div>
      <div className={Styles.techflex}>
        <h3>SEO</h3>
        <p>
          Guess what? Turns out that load times factor into how Google ranks
          websites in search results. Excellent news if you are using Gatsby.
          Even better, since Gatsby is pre made, it is much easier for robots to
          crawl it much easier than server rendered websites (such as
          WordPress). This also helps connect users to the content they were
          searching for.
        </p>
      </div>
    </section>
  </div>
)
