import PropTypes from "prop-types"
import React from "react"
import Info from "../components/info"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header className="normalWidth">
    <div className="nav aos-init aos-animate">
      <div className="shortcuts">
        <a className="link" href="mailto:hi@jordanxliu.com">
          CONTACT
        </a>
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
