import React from 'react'
import "./Landing_page.css"
import {BsFacebook, BsInstagram, BsTelegram, BsTwitter} from "react-icons/bs"

export default function Landing_page() {
  return (
    <div>
    <h1 className="main_name">
    ANTHURIM
    </h1>


    <p className='landing_para'>Revolutionizing the Future of Digital Content Entertainment through Blockchain Technology</p>
    
    <div className="soical_links d-flex justify-content-center gap-4">
      <BsFacebook className='soical_icons'></BsFacebook>
      <BsInstagram className='soical_icons'></BsInstagram>
      <BsTwitter className='soical_icons'></BsTwitter>
      <BsTelegram className='soical_icons'></BsTelegram>
    </div>


    <div className="buttons d-flex justify-content-center gap-5 mt-5">
      <button className='landing_btn'>Buy Now</button>
      <button className='landing_btn'>White Paper</button>
    </div>
    </div>
  )
}
