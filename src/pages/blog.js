import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogList from "../components/BlogList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPageHeader from "../components/SubPageHeader"
import { Title2 } from "../components/Title"

const getPosts = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
              src
              sizes
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

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <SubPageHeader>
        <Title2 text="Blog Posts" styleClass="title-h2-light" />
      </SubPageHeader>
      <section style={{ backgroundColor: "#f4f4f4" }}>
        <BlogList posts={posts} />
      </section>
    </Layout>
  )
}
