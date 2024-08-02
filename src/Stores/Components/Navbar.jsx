import React from 'react'
import {Link} from 'react-router-dom'

import { useCart } from '../Context/Cartcontext'
const Navbar = ({setshowlogin}) => {

    const {cartItems} = useCart()
  return (
    <>
        <div className='navbarsection'>
            <Link to='/home'>
            <div className='title'>
                <h2>Madhu-Deals</h2>
            </div>
            </Link> 
            <div className='search'>
                <input type='text' placeholder='Search'/>
            </div>
            <div className="btns">
                <button onClick={()=> setshowlogin(true)} className='signin-btn'>Sign in</button>
            </div>
                <Link to='/cart'>
                <div className='carts'>
                <button>Cart</button>
                    <span>
                        {cartItems.length}
                    </span>
                    </div>
                    </Link>
            </div>
                 <div className='Sub-Menu'>
                <ul> 
                <Link to='/abc'> <li>MOBLIES</li></Link>
                <Link to='/def'> <li >COMPUTERS</li></Link>
                <Link to='/ghi'> <li> MENS</li></Link>
              <Link to='/mno'><li>WOMENS</li></Link>
               <Link to='/pqr'> <li> FURNITURE</li></Link>
               <Link to='/stu'> <li> AC</li></Link>
              <Link to='/234'><li>WATCH</li></Link>
              <Link to='/567'><li>KITCHEN</li></Link>
              <Link to='/891'><li>FRIDGE</li></Link>
            </ul>
        </div>
        </>
  );
}

export default Navbar