import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Blog/Blog.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import TopHeader from '../Header/TopHeader'

function Blog() {
    const [blog,setBlog] = useState([])
    useEffect(()=>{
        axios.get("http://localhost/wp-headless/server/wp-json/wp/v2/pages")
        .then(resp=>{
            console.log(resp.data)
            setBlog(resp.data)
        }).catch(err=>{console.log(err)})
    },[])
  return (
    <>
       <TopHeader/> 
    <Header/>
    <div className="blogContainer">
        <h1 >Our Blog</h1>
    {
        blog.map((item)=>{
            return <>
            <h2>{item.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{__html:item.content.rendered}}></p>
            {/* <h3 dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></h3> */}
            </>
        })
    }
    </div>
    <Footer/>
    </>
  )
}

export default Blog