import React, { Component } from "react"
import { Link } from "gatsby"

import { FaAlignRight } from "react-icons/fa"
import "./navbar.css"
import Logo from "../../assets/images/logo.png"
class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <div className="header-wrapper">
        <Link to="/">
          <div className="flex-wrapper align">
            <img className="company-logo-mobile" src={Logo} />
            <p className="company-name-mobile">
              Jaana <br /> Aalto-Setälä
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
  }
}

export default NavbarHeader
