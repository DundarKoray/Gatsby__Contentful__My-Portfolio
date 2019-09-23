import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import "./layout.css"
import MotherNav from "./MotherNav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MotherNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
