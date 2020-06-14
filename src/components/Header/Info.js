import React from "react"
import { socialLinks } from "../../data"
import { Twitter, Linkedin, GitHub } from "react-feather"

const Info = () => {
  return (
    <div className="header-info">
      <a href="https://jordanxliu.com">
        <h1>Jordan Liu</h1>
      </a>
      <h4>Full Stack Developer</h4>
      <div className="social-media">
        {
          <a
            href={socialLinks.twitter}
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
        }
        {
          <a
            href={socialLinks.linkedin}
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        }
        {
          <a
            href={socialLinks.github}
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <GitHub />
          </a>
        }
      </div>
    </div>
  )
}

export default Info
