import React from "react"
import Styles from "./pricing.module.scss"
import Button from "./button"

const pricing = () => {
  return (
    <section className={Styles.main}>
      <div
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="400"
        className={Styles.maintitle}
      >
        <h2>
          {" "}
          <span className={Styles.under}>Pricing</span>
        </h2>
      </div>
      <div className={Styles.flex}>
        <div className={Styles.flexItem}>
          <h2>ESSENTIAL</h2>
          <span>5 PAGES</span>
          <h3>150</h3>
          <ul>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Partial User Editing
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Includes Hosting
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Local Customer Service
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              4 Support Assisted Updates Per Month
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Fully Mobile Device Ready
            </li>
          </ul>
          <Button url="#contact">Pricing</Button>
        </div>
        <div className={Styles.flexItem}>
          <h2>STANDARD</h2>
          <span>STARTING AT</span>
          <h3>275</h3>
          <ul>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Fully User Editable Content
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Includes Blog
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              6 Support Assisted Updates Per Month
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              SEO Support
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Monthly Site Analytics Report
            </li>
          </ul>
          <Button url="#contact">Contact</Button>
        </div>
        <div className={Styles.flexItem}>
          <h2>Deluxe</h2>
          <span>STARTING AT</span>
          <h3>350</h3>
          <ul>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              2 Major revisions
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              10 Support Assisted Updates Per Month
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Light & Dark Versions
            </li>
            <li>
              <img
                aria-hidden="true"
                src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                alt=""
              />{" "}
              Choice of CMS
            </li>
          </ul>
          <Button url="#contact">Pricing</Button>
        </div>
      </div>
    </section>
  )
}

export default pricing
