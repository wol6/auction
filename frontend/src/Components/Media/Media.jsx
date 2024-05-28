import React from 'react'
import twt from "../images/twt.png"
import lkin from "../images/ln.png"
import google from "../images/G.png"
import yt from "../images/yt.png"
import '../Media/Media.css'

function Media() {
  return (
    <>
    <div className="socialMedia">
  <div>
    <a href="#">
      <img src={twt} alt="" />
    </a>
  </div>
  <div>
    <a href="#">
      <img src={lkin} alt="" />
    </a>
  </div>
  <div>
    <a href="#">
      <img src={google} alt="" />
    </a>
  </div>
  <div>
    <a href="#">
      <img src={yt} alt="" />
    </a>
  </div>
</div>

    </>
  )
}

export default Media