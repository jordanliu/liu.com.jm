import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import Project from "../components/project"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Info />
    <Project />
    <About />
  </Layout>
)

export default IndexPage
