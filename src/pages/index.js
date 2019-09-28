import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from "../components/Form"
import HeroVideo from "../components/Header/HeroVideo"
import HeroImage from "../components/Header/HeroImage"
import Testimonials from "../components/Testimonials"
import AboutMe from "../components/AboutMe"
import { graphql, useStaticQuery } from "gatsby"
import BlogList from "../components/Blogs"
import React from "react"
import ProjectList from "../components/ProjectList"

const IndexPage = ({ data }) => {
  const { aboutme, blogpost } = data
  return (
    <Layout>
      <SEO title="Home" />
      {/* <HeroVideo /> */}
      <HeroImage />
      <AboutMe
        image={aboutme.image.fluid}
        text1={aboutme.description1.description1}
        text2={aboutme.description2.description2}
        text3={aboutme.description3.description3}
        title1={aboutme.title1}
        title2={aboutme.title2}
        title3={aboutme.title3}
      />
      {/* <ServiceList /> */}
      <ProjectList />
      <Testimonials />
      <BlogList posts={blogpost.edges} />
      <Form />
    </Layout>
  )
}

export const query = graphql`
  {
    aboutme: contentfulAboutMe {
      title1
      title2
      title3
      description1 {
        description1
      }
      description2 {
        description2
      }
      description3 {
        description3
      }

      image {
        fluid(quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
    blogpost: allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          author
          publishedDate(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              base64
              aspectRatio
              sizes
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
`

export default IndexPage
