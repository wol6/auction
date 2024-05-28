import React from 'react'
import '../About/About.css'
import TopHeader from '../Header/TopHeader'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Services() {
  return (
   <>
   <TopHeader/>
   <Header/>
   <div className="aboutContainer">
   <h1>Services</h1>
   <p>
    
At our open trading platform, the clients can easily determine the value of goods sold. 
Our e-auction module is dynamic, user-friendly, transparent, and gives you a 100% secured access.
Our broad database and extensive network in
 the industry integrate enterprises and improve buyer-seller-customer relationships. 
 Our service domain includes:
   </p>
   <div className="list">
   <ul>
    <li>Creating and deploying online scrap management solutions</li>
    <li>Organizing and conducting forward and reverse auctions</li>
    <li>Segregating, bundling and unbundling of lot sizes</li>
    <li>Fixing of a reserve price</li>
    <li>Managing receipts</li>
   </ul>
   </div>
  
   <h2 style={{marginLeft:'10px'}}>OUR EXPERTISE</h2>
  <div className='list'>
  <ul>
    <li>Selling all range of ferrous and non-ferrous scrap</li>
    <li>Dealing in residues of lead, zinc, copper, aluminum and its drosses</li>
    <li>Handling miscellaneous scrap with PCB authorized and unauthorized parties</li>
    <li>Selling non-moving, surplus stores, spares and secondaries</li>
    <li>Assistance in the disposal of Non Performing Assets and Non Movable Items</li>
   </ul>
  </div>
   </div>
   <Footer/>
   </>
  )
}

export default Services