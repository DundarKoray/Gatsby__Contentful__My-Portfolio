import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../../Button"
import { Link } from "react-scroll"
import "../HeroVideo/styles.css"

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const HeroImage = props => {
  const [width, setWidth] = useState(1500)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }
  }, [width])

  const [position, setPosition] = useState(0)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setPosition(window.pageYOffset)
      })
    }
  }, [position])
  const getHeaderTitles = useStaticQuery(graphql`
    {
      headerTitles: allContentfulHeaderTitles(
        sort: { fields: [number], order: ASC }
      ) {
        edges {
          node {
            id
            titles
            number
          }
        }
      }
      backgroundImage: contentfulHeaderBackgroundImage {
        heroImage {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  `)

  const newArray = getHeaderTitles.headerTitles.edges.map(item => {
    return item.node.titles
  })

  let [text, setText] = useState("")
  let [isDeleting, setIsDeleting] = useState(false)
  let [currentIndex, setCurrentIndex] = useState(0)
  let [typeSpeed, setTypeSpeed] = useState(200 - Math.random() * 100)

  const roles = [...newArray]

  const typeWriter = array => {
    const fullText = array[currentIndex % array.length]

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
    } else {
      setText(fullText.substring(0, text.length + 1))
    }

    if (isDeleting) {
      setTypeSpeed(80)
    }

    if (!isDeleting && text === fullText) {
      setTypeSpeed(3000)
      setIsDeleting(true)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setCurrentIndex(currentIndex++)

      setTypeSpeed(200 - Math.random() * 100)
    }
  }

  useInterval(() => {
    typeWriter(roles)
    setCurrentIndex(currentIndex++)
  }, typeSpeed)

  let background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url( ${getHeaderTitles.backgroundImage.heroImage.fluid.src})`,
  }

  return (
    <header id="home" style={background} className="header__main">
      <div className="container">
        <div className="hero-text-box">
          <div className="animate-text-container">
            <h1 className="animate-text">{text}</h1>
          </div>
          <div className="trigger-btn">
            <Link to="contact" smooth={true} offset={50} duration={2000}>
              <Button text="HIRE ME TODAY!" styleClass="btn-primary" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroImage
