import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({btnName}) => {
  const [hover, sethover] = useState(false)

  const mouseEnter = () => {
    sethover(true)
  }
  const mouseLeave = () => {
    sethover(false)
  }
  const buttonStyle = {
    background: hover ? "#FEC861" : "#9D4C8C",
    color: hover ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    margin: "24px 96px 0 96px",
    padding: "6px 25px",
    transition: "background 0.3s",
  };
  return (
    <Button style={buttonStyle} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {btnName}
    </Button>
  )
}

export default Btn
