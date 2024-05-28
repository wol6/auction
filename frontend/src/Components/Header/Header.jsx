import React from 'react'
import '../Header/Header.css'
import { NavLink } from 'react-router-dom'

function Header({bGround,isActive}) {
  return (
   <>
   <div className="navBar" style={bGround}>
    <div className="dropDown">
    <button style={{color:"#fff"}}  className={isActive?'active' : ''}><a>Auctions</a></button>
    <div className="dropList">
    <a href="">Forward Aution</a>
      <a href="">Reverse Aution</a>
      <a href="">Automatic Aution</a>
      <a href="">Live Aution</a>
      <a href="">Absoulte Aution</a>
    </div>
    </div>
   <div>
   <button className={isActive?'active' : ''} ><NavLink to='/aboutus'><a href="">AboutUs</a></NavLink></button>
    <button  className={isActive?'active' : ''}><NavLink to='/services'><a href="">Services</a></NavLink></button>
    <button  className={isActive?'active' : ''}><a href="">ContactUs</a></button>
    <button  className={isActive?'active' : ''}><a href="">FAQ</a></button>
    <button  className={isActive?'active' : ''}><a href="">Term & Conditions</a></button>
   </div>
   </div>
   </>
  )
}

export default Header