import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Info />
    <Project />
  </Layout>
)

export default IndexPage
