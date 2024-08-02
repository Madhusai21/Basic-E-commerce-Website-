import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Moblie = () => {
  const [products,setproducts]=useState([])

  const madhusai = (mango)=>{
    if(products.includes(mango)){
      setproducts(products.filter(item=> item!== mango))
    }else{
      setproducts([ ...products,mango])
    }
  }

   const filteredproducts = products.length===0? mobileData : mobileData .filter((orange)=>products.includes(orange.company))

  return (
        <>
        <Navbar/>
<div className="fullpage">
<div className="proselected">
          {mobileData.map((phone)=>
          {
            return(
              <div className='pro-checkbox'>
              <label>
                <input type="checkbox"
                checked={products.includes(phone.company)}
                onChange={()=> madhusai(phone.company)}
                />
                {phone.company}
                </label> 
                </div>
            )
          })}
        </div>
            <div className='productsections'>
            {
                filteredproducts.map((item)=>{
                   return(
                    <div>
                      <Link to={`/mobiles/${item.id}`}>
                      <div className='imgbox'>
                     <img  className ='proimg'src={item.image} alt="imges"/>
                     </div>
                     </Link>
                     <div className='pro-model'>
                          {item.company},{item.model}
                        </div>
                        </div>
                   )

                })
            }
        </div>
</div>
       
        </>
      );
    }

export default Moblie