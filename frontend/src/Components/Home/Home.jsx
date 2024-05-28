import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import '../Home/Home.css'

function Home({ bGround,isActive }) {
    const [aution, setAuction] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/aution")
            .then(resp => {
                setAuction(resp.data)
            }).catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <div className="autionList" >
                <table>
                    <thead>
                        <tr>
                            <th className={isActive?'tableHeadFont':''} style={bGround}>AUTION NO</th>
                            <th className={isActive?'tableHeadFont':''}  style={bGround}>DATE</th>
                            <th className={isActive?'tableHeadFont':''} style={bGround}>AUC.TYPE</th>
                            <th className={isActive?'tableHeadFont':''} style={bGround}>COMAPNY NAME</th>
                            <th className={isActive?'tableHeadFont':''} style={bGround}>PARTICULARS</th>
                        </tr>
                    </thead>
                <tbody>
                {
                        aution.map((val, index) => {
                            return <tr key={index}>
                                <td className={isActive?'tableBodyFont':''} style={bGround}>{val.id}</td>
                                <td className={isActive?'tableBodyFont':''} style={bGround}>{val.date}</td>
                                <td className={isActive?'tableBodyFont':''} style={bGround}>{val.type}</td>
                                <td className={isActive?'tableBodyFont':''} style={bGround}>{val.company}</td>
                                <td className={isActive?'tableBodyFont':''} style={bGround}>{val.particulars}</td>
                            </tr>
                        })
                    }

                </tbody>

                 


                </table>
            </div>
        </>
    )
}

export default Home