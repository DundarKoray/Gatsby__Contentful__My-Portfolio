import React, { useEffect, useState } from "react"
import { Title4 } from "../Title"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./styles.css"

const Form = () => {
  const [checkHome, setCheckHome] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/en/") {
        setCheckHome(true)
      }
    }
  })
  return (
    <StaticQuery
      query={getContact}
      render={data => {
        const { contact } = data
        // const imgStyles = { backgroundImage: `url(${contact.image.fixed.src})` }
        return (
          <section
            className={
              checkHome === "/en/contact"
                ? "mobile-form-section"
                : "section form-section"
            }
            id="contact"
          >
            <div className="container">
              <div className="flex-wrapper">
                <div className="form-content">
                  <div className="form-content-text">
                    <div className="headline">
                      <Title4 text={contact.title} styleClass="title-h4-dark" />
                    </div>
                    <div className="address">
                      <p>
                        {contact.address}
                        <br />
                        {contact.email}
                        <br />
                        {contact.phoneNumber}
                      </p>
                    </div>
                    <form
                      className="form-fields"
                      action="https://formspree.io/hari.basnet@integrify.io"
                      method="POST"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                      <input
                        type="email"
                        name="_replyto"
                        placeholder="Email"
                        required
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        cols="50"
                        required
                      />
                      <input
                        className="submit-button"
                        type="submit"
                        value="Send"
                      />
                    </form>
                  </div>
                </div>

                {/* <img src={contact.image.fixed.src} /> */}
                <Img fluid={contact.image.fluid} className="form-image" />
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Form

const getContact = graphql`
  {
    contact: contentfulContact {
      title
      image {
        fluid(quality: 60) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      address
      email
      phoneNumber
    }
  }
`
