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
          <h2>Fred Jones</h2>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem
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
          Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem
        </p>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Lorem Lorem</h3>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Lorem Lorem</h3>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
            </p>
          </div>
        </div>
        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Lorem Lorem</h3>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
            </p>
          </div>
        </div>
        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Lorem Lorem</h3>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
            </p>
          </div>
        </div>
        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <div className={Styles.processinner}></div>
          </div>
          <div className={Styles.processinfo}>
            <h3>Lorem Lorem</h3>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem
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
          WordPress PHP developed website.
        </p>
      </div>
      <div>
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
    </section>
  </div>
)
