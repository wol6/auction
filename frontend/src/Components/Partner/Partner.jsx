import React from 'react'
import '../Partner/Partner.css'
import asics from '../images/asics.jpg'
import company from '../images/company.jpg'
import goodeyes from '../images/goodEyes.jpg'
import levelup from '../images/levelUp.jpg'
import novel from '../images/novel.jpg'
import romeo from '../images/romeo.jpg'
import sentry from '../images/sentry.jpg'
import unisect from '../images/unisect.jpg'
import webflow from '../images/webflow.jpg'

function Partner({bGround}) {
  return (
   <>
   <div className="partnerDisplay" style={bGround}>
  <div>
    <h1>AGENSY PROUD IS QUALITY OF PARTNERS</h1>
  </div>
  <div className="partners">
    <div className="item">
      <img src={asics} alt="" />
    </div>
    <div className="item">
      <img src={company} alt="" />
    </div>
    <div className="item">
      <img src={goodeyes} alt="" />
    </div>
    <div className="item">
      <img src={levelup} alt="" />
    </div>
    <div className="item">
      <img src={novel} alt="" />
    </div>
    <div className="item">
      <img src={romeo} alt="" />
    </div>
    <div className="item">
      <img src={sentry} alt="" />
    </div>
    <div className="item">
      <img src={unisect} alt="" />
    </div>
    <div className="item">
      <img src={webflow} alt="" />
    </div>
  </div>
</div>

   </>
  )
}

export default Partner