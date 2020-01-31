import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Info from "../components/info"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header className="normalWidth">
    <div className="nav aos-init aos-animate">
      <div className="shortcuts">
        <Link to="/#contact" className="link">
          CONTACT
        </Link>
      </div>
    </div>
    <Info />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
