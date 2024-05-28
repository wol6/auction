import React, { useEffect, useState } from 'react'
import '../MarketEvents/Stats.css'
import axios from 'axios'

function Stats({bGround,isActive}) {
    const [statistics,setStatistics] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/statistics")
        .then(resp=>{
            setStatistics(resp.data)
        }).catch(err=>{console.log(err)})
    },[])
    return (
        <>
            <div className="staticContainer" style={bGround}>
        {
            statistics.map((val)=>{
                return <>
                <div className="statHeader">
                    <h4  className={isActive?'statActiveHead':""}>MARKET STATISTICS</h4>
                    <h4 className={isActive?'statActiveHead':""}>UPDATED: {val.time} IST</h4>
                </div>
                <div className="statCase" >
                    <div className="staticBox" >
                        <h5 className={isActive?'statActiveBox':""}>total auction</h5>
                        <p className={isActive?'statActiveBox':""} style={{color:"#4C3F93"}}>{val.total}</p>
                    </div>
                    <div className="staticBox">
                        <h5 className={isActive?'statActiveBox':""}>advance </h5>
                        <p className={isActive?'statActiveBox':""} style={{color:"#007A00"}}>{val.advance}</p>
                    </div>
                    <div className="staticBox">
                        <h5 className={isActive?'statActiveBox':""}>decline </h5>
                        <p className={isActive?'statActiveBox':""} style={{color:"#E22028"}}>{val.decline}</p>
                    </div>
                    <div className="staticBox">
                        <h5 className={isActive?'statActiveBox':""}>unchange </h5>
                        <p className={isActive?'statActiveBox':""} style={{color:"#E87425"}}>{val.unchange}</p>
                    </div>
                </div>
               <div className="bidBox">
               <div>
                    <div>
                        <p  style={bGround} className={isActive?'statActiveBidBox':"statBidTitle"}>No. of Upper Bids</p>
                    </div>
                    <div>
                    <p style={{color:"#007A00"}}  className={isActive?'statActiveBidCount':"statBidCount"}>{val.upper}</p>
                    </div>
                   </div>
                   <div >
                    <div>
                        <p style={bGround}  className={isActive?'statActiveBidBox':"statBidTitle"}>No. of Lower Bids</p>
                    </div>
                    <div>
                        <p style={{color:"#E22028"}}  className={isActive?'statActiveBidCount':"statBidCount"}>{val.lower}</p>
                    </div>
                </div>
               </div>
                </>
            })
        }

                
            </div>
        </>
    )
}


// {
//     "time":"04/05/2024 0900",
//     "total":2412,
//     "advance":901,
//     "decline":1511,
//     "unchange":99,
//     "upper":106,
//     "lower":58
// }

export default Stats