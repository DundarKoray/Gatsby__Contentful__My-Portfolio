import React, { useEffect, useState } from "react"
import Navbar from "../NavBar"
import Navbar2 from "../hamburgerMenuPage/Navbar2"

const MotherNav = () => {
  const [width, setWidth] = useState(1500)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }
  }, [width])

  return (
    <div style={{ position: "absolute" }}>
      {width <= 767 ? <Navbar2 /> : <Navbar />}
    </div>
  )
}
export default MotherNav
