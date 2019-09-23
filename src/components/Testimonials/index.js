import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Testimonial from "./Testimonial"
import { Title2 } from "../Title"
import "./testimonial.css"

class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }
    return (
      <StaticQuery
        query={getTestimonials}
        render={data => {
          const { edges } = data.testimonials
          return (
            <section className="section testimonial-section">
              <Title2 text="Testimonials" styleClass="title-h2-dark" />
              <div className="container">
                <Slider {...settings}>
                  {edges.map(({ node: testimonial }) => {
                    return (
                      <div className="testimonial-box" key={testimonial.id}>
                        <Testimonial
                          key={testimonial.id}
                          statement={testimonial.statement}
                          author={testimonial.author}
                        />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </section>
          )
        }}
      />
    )
  }
}

export default Testimonials

const getTestimonials = graphql`
  {
    testimonials: allContentfulTestimonial {
      edges {
        node {
          id
          author
          statement
        }
      }
    }
  }
`
