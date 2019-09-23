import React from "react"
import blogTemplateStyles from "./blogTemplate.module.css"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const postTemplate = ({ data }) => {
  const {
    title,
    publishedDate,
    author,
    image,
    content,
  } = data.contentfulBlogPost

  const img = image.fluid

  function createMarkup() {
    return { __html: content.childMarkdownRemark.html }
  }

  return (
    <Layout>
      <SEO title={`${title}`} />
      <section className={blogTemplateStyles.template}>
        <div className="container">
          <Link to={`/blog/`} className={blogTemplateStyles.btnSmall}>
            <Button text="Back to all posts" styleClass="btn-secondary" />
          </Link>
          <div className={blogTemplateStyles.info}>
            <h1>{title}</h1>
            <h4 className={blogTemplateStyles.credits}>
              <span>by {author}</span> / <span>{publishedDate}</span>
            </h4>
          </div>
          {/* <div className={blogTemplateStyles.image}>
          <Image fixed={img} />
        </div> */}
          <div className={blogTemplateStyles.content}>
            <div
              className={blogTemplateStyles.blogPost}
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 250, maxHeight: 300, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default postTemplate
