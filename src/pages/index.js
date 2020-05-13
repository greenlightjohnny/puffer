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
  </div>
)
