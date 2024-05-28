import React from 'react'
import '../About/About.css'
import Header from '../Header/Header'
import TopHeader from '../Header/TopHeader'
import Footer from '../Footer/Footer'

function AboutUs() {
  return (
   <>
   <TopHeader/>
   <Header/>
   <div className="aboutContainer">
    <h1>WELCOME TO SALASAR ONLINE AUCTION HOUSE</h1>
    <p>
    A One Salasar Pvt. Ltd. is the pioneer and market leader 
    in offering industrial scrap management solutions in India. 
    For over 30 years, our auction system has enabled several 
    blue-chip companies to improve the efficiency of their business
    process. Our automated yet 100% customized e-auction solutions fit every need and budget.
    </p>
    <h1>OUR VALUES</h1>
    <p>
       
Our greatest asset is the reputation we have built over the years in terms of
 reliability, integrity, transparency, trust,
 and excellence in the auctioning services. We aim to fulfill our commitments
  and provide first-rate customer service. 
    </p>
    <h1>OUR VISION</h1>
    <p>
    After establishing a strong foot at national front, we aim to build a
     global network; thus, providing a reliable online platform to auctioneers 
     and bidders from all across the world. On establishing a secure base, we 
     ensure to manage all sorts auctioning activities be it small or major. 
     Our main objective is bringing ease to our clients such that 
    auctioning is not a burden for any business person and bidding is not a
     matter of risk for anyone across the globe.
    </p>
   </div>
   <Footer/>
   </>
  )
}

export default AboutUs