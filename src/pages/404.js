import React from "react"

import MotherNav from "../components/MotherNav"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import layoutStyles from "../components/404/layout2.module.css"

const NotFoundPage = () => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <MotherNav />
      <SEO title="404: Not found" />
      <div className={layoutStyles.main}>
        <h1>404</h1>
        <h3>Something's wrong.</h3>
        <p>Sorry, the page you are looking for cannot be found.</p>
      </div>
    </div>
    <Footer />
  </div>
)

export default NotFoundPage
