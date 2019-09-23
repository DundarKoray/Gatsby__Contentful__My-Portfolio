// import React from "react"
import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import "./styles.css"
import Logo from "../../assets/images/logo.png"

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
    }
  `)

  return (
    <nav className={checkHome && position >= 500 ? "sticky" : null}>
      <div className="container">
        <div className="flex-wrapper">
          <img className="navbar-logo" src={Logo} />
          <div className="navbar-links">
            <p
              className={
                checkHome
                  ? "navbar-company-name-white"
                  : "navbar-company-name-black"
              }
            >
              Jaana <br /> Aalto-Setälä
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
