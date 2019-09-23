import React from "react"
import "./testimonial.css"

const Testimonial = ({ statement, author }) => {
  return (
    <div className="testimonial">
      <p className="testimonial-statement">{statement}</p>
      <div className="testimonial-author-container">
        <p className="testimonial-author">{author}</p>
      </div>
    </div>
  )
}

export default Testimonial
