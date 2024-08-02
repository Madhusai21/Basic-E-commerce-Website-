import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Kitchen= () => {
  const [products,setproducts]=useState([])

  const madhusai = (mango)=>{
    if(products.includes(mango)){
      setproducts(products.filter(item=> item!== mango))
    }else{
      setproducts([ ...products,mango])
    }
  }

   const filteredproducts = products.length===0? kitchenData: kitchenData.filter((orange)=>products.includes(orange.brand))

  return (
        <>
        <Navbar/>
<div className="fullpage">
<div className="proselected">
          {kitchenData.map((phone)=>
          {
            return(
              <div className='pro-checkbox'>
              <label>
                <input type="checkbox"
                checked={products.includes(phone.brand)}
                onChange={()=> madhusai(phone.brand)}
                />
                {phone.brand}
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
                      <Link to={`/kitchen/${item.id}`}>
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

export default Kitchen