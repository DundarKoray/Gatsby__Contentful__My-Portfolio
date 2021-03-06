import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project"
import SEO from "../components/seo"
import SubPageHeader from "../components/SubPageHeader"
import { Title2 } from "../components/Title"

const portfolio = () => {
  const getProject = useStaticQuery(graphql`
    {
      allProject: allContentfulProject(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            title
            order
            link
            image {
              fixed(height: 240, width: 320) {
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
      }
    }
  `)
  return (
    <>
      <Layout>
        <SEO title="Portfolio" />
        <SubPageHeader>
          <Title2 text="Recent Projects" styleClass="title-h2-light" />
        </SubPageHeader>
        <section id="portfolio-page" class="portfolio">
          <div class="portfolio__container">
            {getProject.allProject.edges.map(({ node: item }) => {
              return <Project link={item.link} image={item.image.fixed} title={item.title} />
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default portfolio
