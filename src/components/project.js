import React from "react"
import "./layout.css"

const project = () => {
  return (
    <div data-sal="fade">
      <h4 data-sal="fade">Projects</h4>
      <div class="cards" data-sal="fade">
        <div class="card" data-sal="fade">
          ONE
        </div>
        <div class="card" data-sal="fade">
          TWO
        </div>
        <div class="card" data-sal="fade">
          THREE
        </div>
        <div class="card" data-sal="fade">
          FOUR
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="projects-button">View more projects</button>
      </div>
    </div>
  )
}

export default project
