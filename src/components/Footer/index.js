import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"
import "./styles.css"

const getSocialMediaLinks = graphql`
  {
    links:allContentfulSocialMediaLinks {
      edges {
        node {
          id
          link
          fontawesome
        }
      }
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <StaticQuery query={getSocialMediaLinks} render={data => {
        const { links } = data;
        return (
          <footer className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <div className="icons">
                  {
                    links.edges.map(({ node: item }) => {
                      return (
                        <a
                          className="social-media-icons"
                          href={item.link}
                          key={item.id}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {
                            item.link.includes('facebook')
                              ? <FaFacebook /> : null
                          }
                          {
                            item.link.includes('twitter')
                              ? <FaTwitterSquare /> : null
                          }
                          {
                            item.link.includes('linkedin')
                              ? <FaLinkedin /> : null
                          }
                          {
                            item.link.includes('instagram')
                              ? <FaInstagram /> : null
                          }
                        </a>

                      )
                    })
                  }
                </div>
                <p>
                  Copyright &copy; 2019 Jaana Aalto-Setälä <br />
                  Built with ♡ by Integrify developers
                </p>
              </div>
            </div>
          </footer>
        )
      }} />
    )
  }
}

export default Footer
