import React from "react"
import { socialLinks } from "../../data"
import { Twitter, Linkedin, GitHub } from "react-feather"

const SocialMedia = () => {
  return (
    <div className="social-media">
      {
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
      }
      {
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
      }
      {
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GitHub />
        </a>
      }
    </div>
  )
}

export default SocialMedia
