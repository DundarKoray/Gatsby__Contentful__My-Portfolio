// import React from "react"
import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import "./styles.css"

import Img from "gatsby-image"

const NavBar = () => {
  const [position, setPosition] = useState(0)
  const [checkHome, setCheckHome] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/en/") {
        setCheckHome(true)
      }

      window.addEventListener("scroll", () => {
        setPosition(window.pageYOffset)
      })
    }
  }, [position])

  const getNavBar = useStaticQuery(graphql`
    {
      navLinks: allContentfulNavLinks(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            id
            link
            order
          }
        }
      }
      navLogo: contentfulNavbarLogo {
        id
        firstName
        lastName
        logo {
          fixed(width: 120) {
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
  `)

  return (
    <nav className={checkHome && position >= 500 ? "sticky" : null}>
      <div className="container">
        <div className="flex-wrapper">
          {/* <img className="navbar-logo" src={getNavBar.navLogo.Logo} /> */}

          <Img className="navbar-logo" fixed={getNavBar.navLogo.logo.fixed} />

          <div className="navbar-links">
            <p
              className={
                checkHome
                  ? "navbar-company-name-white"
                  : "navbar-company-name-black"
              }
            >
              {getNavBar.navLogo.firstName} {getNavBar.navLogo.lastName}
            </p>
            <ul className="navbar-nav-custom">
              {getNavBar.navLinks.edges.map(({ node: item }) => {
                return (
                  <li key={item.id} className="navbar-item">
                    {checkHome ? (
                      <ScrollLink
                        activeClass={"navbar-link-active"}
                        to={item.link}
                        smooth={true}
                        spy={true}
                        hashSpy={false}
                        offset={-60}
                        duration={1200}
                        className={
                          checkHome ? "navbar-link navbar-link-white" : null
                        }
                      >
                        {item.link}
                      </ScrollLink>
                    ) : (
                      <Link
                        className={"navbar-link"}
                        to={`/en/#${item.link === "home" ? "" : item.link}`}
                        activeClassName={"navbar-link-active"}
                      >
                        {item.link}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
