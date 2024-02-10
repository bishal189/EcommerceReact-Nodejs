import React from 'react'
import { NavLink } from 'react-router-dom'
import './LinkIcon.css'

const LinkIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <>
      <NavLink to={link} className={sidebar ? "align_center sidebar_link" : "align_center"}>
        {title}
        <img src={sidebar ? `http://localhost:5000/category/${emoji}` : emoji} alt="" className="link_emoji" />
      </NavLink>
    </>
  );
};

export  default LinkIcon