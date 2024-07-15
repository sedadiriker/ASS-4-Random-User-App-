import React from 'react'


const SvgIcons = ({icon}) => {
  return (
    <div>
      <img width={50} style={{border:"1px solid gray", borderRadius:"50%", padding:"5px"}} src={icon} alt="Icon" />
    </div>
  )
}

export default SvgIcons
