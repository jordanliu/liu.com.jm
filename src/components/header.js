import React from "react"
import Info from "./info"
import "./layout.css"

const Header = () => (
  <header className="normalWidth">
    <nav className="shortcuts nav aos-init aos-animate">
      <a className="link" href="mailto:hi@jordanxliu.com">
        CONTACT
      </a>
    </nav>
    <Info />
  </header>
)

export default Header
