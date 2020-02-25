import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="normalWidth">{children}</main>
      <footer className="normalWidth">
        Built with{" "}
        <span role="img" aria-label="heart">
          💖
        </span>{" "}
        by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          href="https://github.com/jordanliu"
        >
          Jordan Liu
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
