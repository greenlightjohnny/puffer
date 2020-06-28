import React from "react"
import Styles from "./button.module.scss"
import { Link } from "gatsby"

const button = props => {
  return (
    <Link className={Styles.button1} to={props.url}>
      {props.children}{" "}
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
  )
}

export default button
