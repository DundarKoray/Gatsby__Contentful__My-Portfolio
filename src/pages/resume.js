import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Resume"
import SubPageHeader from "../components/SubPageHeader"
import { Title2 } from "../components/Title"
import Button from "../components/Button"
const services = () => {

  return (
    <>
      <Layout>
        <SEO title="Resume" />
        <SubPageHeader>
          <div className="resume-sub">

            <Title2 text="Dig a little deeper" styleClass="title-h2-light" />
            <a href="https://drive.google.com/file/d/1_r6g4VqszAGyyNE-o4UP9y7X1Rw2Pf9D/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button text="Download Resume" styleClass="btn-primary" /></a>
          </div>
        </SubPageHeader>
        <Resume />
      </Layout>
    </>
  )
}

export default services
