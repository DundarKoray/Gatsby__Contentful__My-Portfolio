import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

import "./navbar.css"

class NavbarLinks extends Component {
  render() {
    let status

    if (this.props.navbarOpen) {
      status = "link-wrapper-open"
    } else {
      status = "link-wrapper-close"
    }

    return (
      <ul className={`link-wrapper ${status}`}>
        {
          <StaticQuery
            query={getNavBar}
            render={data => {
              return data.navLinks.edges.map(({ node: item }) => {
                return (
                  <li key={item.id}>
                    {window.location.pathname === "/en/" ? (
                      <ScrollLink
                        to={item.link}
                        className="nav-link"
                        smooth={true}
                        offset={-70}
                        duration={2000}
                      >
                        {item.link}
                      </ScrollLink>
                    ) : (
                      <Link
                        to={`/en/#${item.link === "home" ? "" : item.link}`}
                        className="nav-link"
                        smooth={true}
                        offset={-70}
                        duration={1500}
                      >
                        {item.link}
                      </Link>
                    )}
                  </li>
                )
              })
            }}
          />
        }

        {/* {this.state.links.map(link => {
                    return (
                        <li key={link.id}>
                            <Link to={link.path} className="nav-link">{link.name}</Link>
                        </li>
                    )
                })} */}
      </ul>
    )
  }
}

export default NavbarLinks

const getNavBar = graphql`
  {
    navLinks: allContentfulNavLinks(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          link
          order
          slug
        }
      }
    }
  }
`
