import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceList from "../components/ServiceList"
import Form from "../components/Form"
import HeroVideo from "../components/HeroVideo"
import Testimonials from "../components/Testimonials"
import AboutMe from "../components/AboutMe"
import { graphql, useStaticQuery } from "gatsby"
import BlogList from "../components/Blogs"
import React from "react"

const IndexPage = ({ data }) => {
  const { aboutme, blogpost } = data
  return (
    <Layout>
      <SEO title="Home" />
      <HeroVideo />
      <AboutMe
        image={aboutme.image.fixed.src}
        text={aboutme.description.description}
        title1={aboutme.title1}
        title2={aboutme.title2}
        title3={aboutme.title3}
      />
      <ServiceList />
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
      description {
        description
      }
      image {
        fixed(quality: 100) {
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
            fluid(maxWidth: 250, maxHeight: 300) {
              base64
              aspectRatio
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
