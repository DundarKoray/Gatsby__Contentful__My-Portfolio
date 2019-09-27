import React from "react"
import Button from "../Button"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./styles.css"

const AboutMe = ({ image, text, title1, title2, title3 }) => {
  const imgStyles = { backgroundImage: `url(${image})` }
  return (
    <section className="section about-me" id="about">
      <div className="container">
        <div className="about-me-wrapper">
          <div className="about-me-text">
            <h1>
              {title1} <br /> <span className="highlight">{title2} </span>
              {title3}
            </h1>
            <p>{text}</p>
            <div>
              <a href="https://drive.google.com/open?id=1ldd5yu_H-_ecu0H8Ji_g_HfUEn0u_llM" target="_blank" rel="noopener noreferrer">
                <Button styleClass="btn-secondary" text="My Resume" />
              </a>
            </div>
          </div>
          <Img
            className="about_me_image"
            fluid={image}
            imgStyle={{ objectPosition: "center top" }}
          />
          {/* <div style={imgStyles} className="about_me_image"></div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
