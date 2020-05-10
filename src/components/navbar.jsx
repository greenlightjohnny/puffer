import React, { useState } from "react"
import Style from "./navbar.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Shockedp from "../images/tacacs.jpeg"
import useDarkMode from "use-dark-mode"
import Toggle from "./toggle"
import Darkmodetoggle from "./darkmode"

const Navlink = props => (
  <AniLink
    cover
    bg={`

    url(${Shockedp})
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  `}
    to={props.to}
  >
    {props.children}
  </AniLink>
)

function Navbar() {
  const [navnames, setNavnames] = useState(false)
  const darkMode = useDarkMode(false)

  return (
    <div className={Style.container}>
      <h3>
        <Navlink to="/">
          Blow<span className={Style.spantitle}>Fish</span>
        </Navlink>
      </h3>
      <Darkmodetoggle />
      <nav
        className={`${Style.mobile} ${
          navnames ? Style.showmenu : Style.hidemenu
        }`}
      >
        <ul>
          <li onClick={() => setNavnames(false)}>
            <Navlink to="/">Home</Navlink>
          </li>
          <li>
            <Navlink to="/memes">About</Navlink>
          </li>
          <li>
            <Navlink to="/lobbying">Process</Navlink>
          </li>
          <li>
            <Navlink to="/about">Showcase</Navlink>
          </li>
          <li>
            <Navlink to="/about">Contact</Navlink>
          </li>
        </ul>
      </nav>

      <button
        className={Style.navbutton}
        onClick={() => setNavnames(!navnames)}
      >
        <span
          className={`${Style.navspan} ${navnames ? Style.animate : null} `}
        ></span>
      </button>
    </div>
  )
}

export default Navbar
