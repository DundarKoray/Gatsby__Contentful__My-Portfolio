import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../../components/Button"
import { Link } from "react-scroll"
import "./styles.css"

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

const HeroVideo = props => {
  const [width, setWidth] = useState(1500)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }
  }, [width])

  const [position, setPosition] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {

      window.addEventListener("scroll", () => {
        setPosition(window.pageYOffset)
      })
    }
  }, [position])
  const getHeaderTitles = useStaticQuery(graphql`
    {
      headerTitles: allContentfulHeader {
        edges {
          node {
            id
            titles
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

  return (
    <header
      id="home"
      className="video-header container"
      style={
        width > 767 && position > 500
          ? { minHeight: "calc(100vh - 1px)" }
          : null
      }
    >
      <div
        className="fullscreen-video-wrap"
      // style={width > 767 && position > 500 ? { height: "86vh" } : null}
      >
        <video autoPlay loop muted className="bg-video">
          <source
            src={require("../../assets/videos/hero-video.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="header-overlay"
      // style={width > 767 && position > 500 ? { height: "86vh" } : null}
      ></div>
      <div className="header-content">
        <div className="animate-text-container">
          <h1 className="animate-text">{text}</h1>
        </div>
        <div className="trigger-btn">
          <Link to="contact" smooth={true} offset={50} duration={2000}>
            <Button text="HIRE ME TODAY!" styleClass="btn-primary" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeroVideo
