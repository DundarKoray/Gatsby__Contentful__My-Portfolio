import React from "react"
import BlogPost from "../BlogPost"
import { Title2 } from "../Title"
import blogListStyles from "../BlogList/blogList.module.css"
import Button from "../Button"
import { Link } from "gatsby"

const BlogList = ({ posts }) => {
  return (
    <section id="blog" className={blogListStyles.sectionBlog}>
      <div className="container">
        <Title2 text="My Latest Blog posts" styleClass="title-h2-dark" />

        <article className={blogListStyles.posts}>
          <div className={blogListStyles.flexContainer}>
            {posts.slice(0, 3).map(({ node: post }, index) => {
              return <BlogPost key={index} post={post} />
            })}
          </div>
        </article>

        <div style={{ height: "100%", textAlign: "center" }}>
          <Link to="/en/blog">
            <Button text="view all posts" styleClass="btn-secondary" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogList
