import React from "react"
import "./styles.css"

const Button = ({ text, styleClass }) => (
  <button className={styleClass}>{text}</button>
)
Button.defaultProps = {
  text: "click me",
}
export default Button
