import React, { useState } from 'react'
import './Loginpage.css'
const Loginpage = (setshowlogin) => {

  const [currstate ,setcurrstate]=useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1> {currstate}</h1>
        </div>
        <div className="login-popup-input">
          {currstate==="Login"?<></> : <input type='text' placeholder='Your Name' required/>}
          <input type='email' placeholder='Your Email' required/>
          <input type='Password' placeholder='Password' required/>
        </div>
        <button>{ currstate==="Sign up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==="Login"
        ?<p> Create a new account ? <span onClick={()=>setcurrstate("Sign Up")}>Click here</span></p>
        :<p> Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here </span></p>
        }
      </form>
    </div>
  )
}

export default Loginpage