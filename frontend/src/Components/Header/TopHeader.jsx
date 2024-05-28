import React from 'react'
import { NavLink } from 'react-router-dom'

function TopHeader() {
    return (
        <>
            <div className="mainHead" style={{ marginBottom: '10px' }}>
                <div className='headOne' style={{ margin: '0 90px' }}>
                    <h3><NavLink to='/'><a href="">home</a></NavLink></h3>
                    <h3><a href="">career</a></h3>
                    <h3><a href="">calender</a></h3>
                    <h3><NavLink to='/ourblog'><a href="">OurBlog</a></NavLink></h3>
                </div>

            </div>
        </>
    )
}

export default TopHeader