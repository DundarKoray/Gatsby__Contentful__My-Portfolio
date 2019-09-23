import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ServiceCard from "../ServiceCard"
import Button from "../Button"
import { Link } from "gatsby"
import "./styles.css"

const ServiceList = () => {
  return (
    <StaticQuery
      query={getServices}
      render={data => {
        const { services } = data
        return (
          <section className="section service-section" id="services">
            <div className="container">
              <p className="normal-text">
                I provide <span className="gold-text">high quality</span> Event
                Management, Leadership Development and Project Management.
              </p>
              <div className="services-wrapper">
                {services.edges.map(({ node: service }) => {
                  return (
                    <ServiceCard
                      title={service.title}
                      text={service.text}
                      key={service.id}
                    />
                  )
                })}
              </div>
              <div className="button-wrapper">
                <Link to="/en/services">
                  <Button styleClass="btn-primary" text="Learn more" />
                </Link>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default ServiceList

const getServices = graphql`
  {
    services: allContentfulServices {
      edges {
        node {
          id
          title
          text
        }
      }
    }
  }
`
