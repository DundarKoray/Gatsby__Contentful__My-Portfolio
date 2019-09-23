import React from "react"
import Image from "gatsby-image"
import blogPostStyles from "./blogPost.module.css"
import { Link } from "gatsby"

const BlogPost = ({ post }) => {
  const { title, publishedDate, author, slug } = post
  const img = post.image.fluid

  return (
    <article className={blogPostStyles.card}>
      <Link to={`/blog/${slug}`} className={blogPostStyles.blogLink}>
        <div className={blogPostStyles.image}>
          <Image fluid={img} />
        </div>
        <div className={blogPostStyles.info}>
          <h2 className={blogPostStyles.title}>{title}</h2>
          <h5 className={blogPostStyles.credits}>
            <span>by {author}</span> / <span>{publishedDate}</span>
          </h5>

          <p className={blogPostStyles.read}>Read Post</p>
        </div>
      </Link>
    </article>
  )
}

export default BlogPost
