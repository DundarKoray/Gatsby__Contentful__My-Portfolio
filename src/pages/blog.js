import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogList from "../components/BlogList"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <BlogList posts={posts} />
    </Layout>
  )
}
