import React from "react"
import Button from "../Button"
import { Link } from "gatsby"
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
              <Link to={"/en/resume"}>
                <Button styleClass="btn-secondary" text="My Resume" />
              </Link>
            </div>
          </div>
          <div style={imgStyles} className="about_me_image"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
