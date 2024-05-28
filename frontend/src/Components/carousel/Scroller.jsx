import React, { useEffect, useState } from 'react'
import '../carousel/Slider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function Scroller() {
    const [images,setImages]=useState([])
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed: 1000,
        cssEase: "linear"
      }

      useEffect(()=>{
        axios.get("http://localhost:3000/carousel")
        .then(resp=>{
            setImages(resp.data)
        }).catch(err=>{
            console.log(err)
        })
      },[])
      console.log(images)
  return (
   <>
    <div className='carousel'>
    <Slider {...settings}>

{
    images.map((item)=>{
       return <div className="slide">
         <img src={item.img} alt="" />
       </div>
    })
}

   </Slider>
    </div>
   </>
  )
}

export default Scroller