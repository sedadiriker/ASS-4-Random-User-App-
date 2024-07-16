import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className=" d-flex gap-2 align-items-center">
    <Spinner animation="grow" variant="warning" />
    <p style={{color:"#9D4B8C", fontSize:"2rem", }}>Loading</p>
    <Spinner animation="grow" variant="warning" />
    </div>
  )
}

export default Loading
