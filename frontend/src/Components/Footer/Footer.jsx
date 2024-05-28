import React from 'react'
import Media from '../Media/Media'
import '../Footer/Footer.css'

function Footer({bGround,isActive}) {
  return (
   <>
    <div className="footer" style={bGround}>
      <div style={{paddingTop:"10px"}}>
      <Media/>
      </div>
        <div className="footerCase">
        <div>
            <h3 className={isActive?'footerHead':''}>Address</h3>
            <p className={isActive?'footerpara':''}>73035 Lahoma Brooks, North Noeland, NV 43919</p>
        </div>
        <div>
            <h3 className={isActive?'footerHead':''}>Phone</h3>
            <p className={isActive?'footerpara':''}>
            Phone Number: 022-25660141 </p>
            <p className={isActive?'footerpara':''}>
            Mobile Number: 09320445534 / 09320589231
            </p>
        </div>
        <div>
            <h3 className={isActive?'footerHead':''}>Email</h3>
            <p className={isActive?'footerpara':''}>scs@salasarauction.com</p>
        </div>
        </div>
        <div className='copyrigt'>
            <p className={isActive?'footerpara':''}>Copyright @ 2024 A ONE AUCTION PRIVATE LIMITED All Rights Reserved</p>
        </div>
    </div>
   </>
  )
}

export default Footer