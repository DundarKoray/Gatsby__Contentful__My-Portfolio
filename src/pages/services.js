import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accordion from "../components/Accordion"
import ServiceDetails from "../components/ServiceDetails"

const services = () => {
  const getServicePage = useStaticQuery(graphql`
    {
      servicePage: contentfulServicesPage {
        id
        clientName
        text
        title1
        title2
        title3
        image {
          fixed {
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
        bodyText
        bodyTitle
      }
    }
  `)
  const { servicePage } = getServicePage
  const {
    text,
    title1,
    title2,
    title3,
    image,
    bodyText,
    bodyTitle,
    clientName,
    id,
  } = servicePage

  return (
    <>
      <Layout>
        <SEO title="Services" />
        <ServiceDetails />
        <div style={{ marginBottom: "40px" }}>
          <Accordion />
        </div>
      </Layout>
    </>
  )
}

export default services
