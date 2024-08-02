import React, { useState } from 'react'
import Products from '../Components/Products'
import Navbar from '../Components/Navbar'
import Loginpage from './Loginpage'

const Landingpage = () => {
  const [showlogin,setshowlogin]=useState(false)
  return (
    <>
     {showlogin?<Loginpage setshowlogin={setshowlogin}/> : <></>}
    <div>
        <Navbar setshowlogin={setshowlogin}/>
        <Products/>
    </div>
    </>
  )
}

export default Landingpage