import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import Img from "gatsby-image"
import "./navbar.css"

const getNavigationLogo = graphql`
  {
    navLogo: contentfulNavbarLogo {
      id
      firstName
      lastName
      logo {
        fixed(width: 70) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`

class NavbarHeader extends Component {
  render() {
    return (
      <StaticQuery
        query={getNavigationLogo}
        render={data => {
          const { handleNavbar } = this.props

          return (
            <div className="header-wrapper">
              <Link to="/">
                <div className="flex-wrapper align">
                  <Img
                    className="company-logo-mobile"
                    fixed={data.navLogo.logo.fixed}
                  />
                  <p className="company-name-mobile">
                    {data.navLogo.firstName} <br /> {data.navLogo.lastName}
                  </p>
                </div>
              </Link>
              <FaAlignRight
                className="toggle-icon"
                onClick={() => {
                  handleNavbar()
                }}
              />
            </div>
          )
        }}
      />
    )
  }
}

export default NavbarHeader
