import React, { useState } from "react"
import Style from "./navbar.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Shockedp from "../images/tacacs.jpeg"
import useDarkMode from "use-dark-mode"
import Toggle from "./toggle"
import Darkmodetoggle from "./darkmode"
import { Link } from "gatsby"

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
          Puffer<span className={Style.spantitle}>Fish</span>
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
            <Link to="#home">Home</Link>
          </li>
          <li onClick={() => setNavnames(!navnames)}>
            <Link to="/#about">About</Link>
          </li>
          <li onClick={() => setNavnames(!navnames)}>
            <Link to="#services">Services</Link>
          </li>
          <li onClick={() => setNavnames(!navnames)}>
            <Link to="#process">Process</Link>
          </li>
          <li onClick={() => setNavnames(!navnames)}>
            <Link to="#showcase">Showcase</Link>
          </li>
          <li onClick={() => setNavnames(!navnames)}>
            <Link to="#contact">Contact</Link>
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
