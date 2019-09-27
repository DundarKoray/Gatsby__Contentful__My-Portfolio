import React from "react"
import Img from "gatsby-image"
import Button from "../Button"
import "./styles.css"

const Project = ({ image, title, link }) => {
  return (
    <figure className="portfolio__photos">
      <div className="inside">
        <div className="inside__link" >
          <Img className="inside__pic" fixed={image} alt={title} />
          <span className="portfolio__hidden-title">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button text={title} styleClass="btn-primary small-button" />
            </a>
          </span>
        </div>
      </div>
    </figure>
  )
}

export default Project
