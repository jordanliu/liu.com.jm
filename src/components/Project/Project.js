import React from "react"
import "./Project.css"
import { ArrowUpRight } from "react-feather"
import Img from "gatsby-image"

const Project = ({ projects }) => {
  if (!projects) return null
  return (
    <div>
      <h4 className="projects-title">Featured Projects</h4>
      <div className="cards">
        {projects.map(project => {
          return (
            <div className="card" key={project.node.frontmatter.id}>
              <div className="image">
                <Img
                  className="img-content"
                  alt="placeholder"
                  fluid={project.node.frontmatter.image.childImageSharp.fluid}
                />
              </div>

              <div className="info">
                <h3 className="title">{project.node.frontmatter.title}</h3>
                <h4 className="tags">{project.node.frontmatter.tags}</h4>
                <p className="text">{project.node.frontmatter.description}</p>
                <div className="links">
                  <div className="github nav-anim">
                    <a
                      href={project.node.frontmatter.github_url}
                      rel="noopener noreferrer"
                      aria-label="Github"
                    >
                      Github
                      <ArrowUpRight className="error" />
                    </a>
                  </div>
                  <div className="view-live nav-anim">
                    <a
                      href={project.node.frontmatter.live_url}
                      rel="noopener noreferrer"
                      aria-label="View Live"
                    >
                      View Live
                      <ArrowUpRight className="error" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <a href="https://github.com/jordanliu" className="view-more-cta">
          <h4>View more on GitHub</h4>
        </a>
      </div>
    </div>
  )
}

export default Project
