import React from 'react'
import './LinkIcon.css'

const LinkIcon = ({title,link,emoji}) => {
  return (
    <>
    <a href={link} className="align_center">
    {title}
    <img src={emoji} alt="" className="link_emoji" />
    </a>
    </>
    
 
  )
}

export default LinkIcon
