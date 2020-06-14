import React from "react"
import "./Project.css"
import Card from "../Card/Card"

const Project = ({ projects }) => {
  if (!projects) return null
  return (
    <section className="project-wrapper">
      <h4 className="projects-title">Featured Projects</h4>
      <div className="cards">
        {projects.map(project => {
          return <Card project={project} key={project.node.frontmatter.id} />
        })}

        <h4 className="view-more-cta">
          <a href="https://github.com/jordanliu">View more on GitHub</a>
        </h4>
      </div>
    </section>
  )
}

export default Project
