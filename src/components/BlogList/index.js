import React from "react"
import BlogPost from "../BlogPost"
import blogListStyles from "./blogList.module.css"

const BlogList = ({ posts }) => {
  return (
    <div className="container">
      <div className="flex-wrapper">
        <article className={blogListStyles.posts}>
          <div className={blogListStyles.flexContainer}>
            {posts.map(({ node: post }, index) => {
              return <BlogPost key={index} post={post} />
            })}
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogList
