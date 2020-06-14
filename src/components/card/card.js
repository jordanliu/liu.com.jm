import React from "react"
import { ArrowUpRight } from "react-feather"
import Img from "gatsby-image"

const Card = props => {
  return (
    <div className="card" key={props.project.node.frontmatter.id}>
      <div className="image">
        <a
          href={props.project.node.frontmatter.live_url}
          rel="noopener noreferrer"
        >
          <Img
            className="img-content"
            alt="Project card preview"
            fluid={props.project.node.frontmatter.image.childImageSharp.fluid}
          />
        </a>
      </div>

      <div className="info">
        <h3 className="title">
          <a
            href={props.project.node.frontmatter.live_url}
            rel="noopener noreferrer"
          >
            {props.project.node.frontmatter.title}
          </a>
        </h3>
        <span className="tags">{props.project.node.frontmatter.tags}</span>
        <p className="text">{props.project.node.frontmatter.description}</p>
        <div className="links">
          <div className="github nav-anim">
            <a
              href={props.project.node.frontmatter.github_url}
              rel="noopener noreferrer"
              aria-label="Github"
            >
              Github
              <ArrowUpRight className="error" />
            </a>
          </div>
          <div className="view-live nav-anim">
            <a
              href={props.project.node.frontmatter.live_url}
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
}

export default Card
