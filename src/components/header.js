import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header className="normalWidth">
    <div className="nav aos-init aos-animate">
      <div className="shortcuts">
        <Link className="link">PROJECTS</Link>
        <Link className="link">CONTACT</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
