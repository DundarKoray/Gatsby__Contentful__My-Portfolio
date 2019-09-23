import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './styles.css'


const ServiceDetails = () => {


    const getServicePage = useStaticQuery(graphql`{
        servicePage:contentfulServicesPage {
     id
    clientName
    text
    title1
    title2
    title3
    image{
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

    }`)
    const { servicePage } = getServicePage
    const { text, title1, title2, title3, image, bodyText, bodyTitle, clientName, id } = servicePage

    return (
        <section className="service-page-section">
            <div className="container">
                <div className="about-me-wrapper">
                    <div className="service-page-text">
                        <h3 className="client-name">{clientName}</h3>
                        <h2 className="service-page-title">{title1}<br />{title2}<br />{title3} </h2>
                        <p className="service-page-paragraph">{text}</p>
                    </div>
                    <div className="service-page-image">
                        <img src={image.fixed.src} />
                    </div>
                </div>

            </div>

            <div className="container">
                <h2 className="sp-body-title">{bodyTitle}</h2>
                <p className="sp-body-text">{bodyText}</p>
            </div>
        </section>
    )
}

export default ServiceDetails
