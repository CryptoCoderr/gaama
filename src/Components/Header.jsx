import React from 'react'
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
        <Navbar/>
        <div className='name'>
            <h1><span>Lauch Your App</span>With Confidence And Creativity</h1>
        <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, veniam excepturi tempora porro iure est. Repudiandae harum molestias voluptatum soluta magnam excepturi accusamus voluptate velit? Illo magnam eveniet dignissimos facilis!</p>
        <a href='#' className='cv-btn'>Download</a>
        </div>
        </div>
  )
}

export default Header;