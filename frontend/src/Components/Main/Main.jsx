import React, { useRef, useState } from 'react'
import Home from '../Home/Home';
import Header from '../Header/Header';
import '../Main/Main.css'
import Scroller from '../carousel/Scroller';
import Stats from '../MarketEvents/Stats';
import Events from '../MarketEvents/Events';
import logo from '../images/auction-house-hammer-justice-logo-260nw-1692875086.jpg'
import logoblack from '../images/logoblack.jpg'
import Media from '../Media/Media';
import Partner from '../Partner/Partner';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';


function Main() {
    const [changeBg, setChangeBg] = useState({})
    const [islogo, setIslogo] = useState(true)
    const [isActive, setIsActive] = useState(false)


    const fontSize = useRef()
    const sizeRefs = useRef()

    const handleFont = () => {
        // setIsActive(prevState => !prevState)
        setIsActive(true)
    }

    const handleClick = () => {
        setIsActive(false)
    }

    const handleBG = () => {
        setChangeBg({ backgroundColor: "black" })
        setIslogo(!islogo)
    }

    const handleReset = () => {
        window.location.reload()
    }

    return (
        <>
            <div className="mainContainer" style={changeBg}>
                <div className="mainHead">
                    <div> {
                        islogo ? (<img src={logo} alt="" />) : (<img src={logoblack} alt="" />)}
                    </div>
                    <div className='headOne'>
                        <h3><a className={isActive?'activeLink':''} href="">home</a></h3>
                        <h3><a className={isActive?'activeLink':''} href="">career</a></h3>
                        <h3><a className={isActive?'activeLink':''} href="">calender</a></h3>
                        <h3><NavLink to='/ourblog'><a className={isActive?'activeLink':''} href="">OurBlog</a></NavLink></h3>
                    </div>
                    <div className='headBtn'>
                        <button onClick={handleClick}>A</button>
                        <button onClick={handleFont}>A+</button>
                        <button onClick={handleBG} style={{ background: "#111", color: "#fff" }}>A</button>
                        <button onClick={handleReset}>A</button>
                    </div>
                </div>
                <div style={{ position: "relative", top: "-65px", left: "1172px" }}>
                    <Media />
                </div>
                <Header isActive={isActive} bGround={changeBg} />
                <div style={{ display: "flex", justifyContent: "space-around", margin: "25px" }}>
                    <Events isActive={isActive} bGround={changeBg} />
                    <Stats isActive={isActive} bGround={changeBg} />
                </div>
                <Home isActive={isActive} bGround={changeBg} />
                {/* <Scroller/> */}
                <Partner bGround={changeBg} />
                <Footer isActive={isActive} bGround={changeBg} />
            </div>

        </>
    )
}

export default Main