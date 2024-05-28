import React, { useEffect, useState } from 'react'
import '../MarketEvents/Events.css'
import Slider from 'react-slick'
import axios from 'axios';

function Events({bGround,isActive}) {
    const [marketEvent, setMarketEvent] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    useEffect(() => {
        // axios.get("http://localhost:3000/events")
        axios.get("http://localhost/wp-headless/server/wp-json/wp/v2/posts")
            .then(resp => {
                // console.log(resp)
                setMarketEvent(resp.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="eventBox" style={ bGround}>
                <h2 className={isActive?'eventActiveHead':""}>Up Comming Events</h2>
                <Slider {...settings}>
                    { 
                        marketEvent.map((val) => {
                            return <>
                                <div className='eventCase'>
                                    <h3 className={isActive?'eventActiveDate':""}>{val.title.rendered}</h3>
                                    <h4 className={isActive?'eventActiveEvent':""} 
                                    dangerouslySetInnerHTML={{__html:val.excerpt.rendered}}>
                                        </h4>
                                </div>
                            </>
                        })
                    }
                    {/* <div className='eventCase'>
        <h3>Date</h3>
        <h4>Events</h4>
    </div>
    <div className='eventCase'>
        <h3>Date</h3>
        <h4>Events</h4>
    </div> */}
                </Slider>
            </div>
        </>
    )
}

export default Events