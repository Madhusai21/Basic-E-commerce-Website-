import React, { useState } from 'react'
import { speakerData } from '../data/speaker';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Sepaker= () => {
  const [products,setproducts]=useState([])

  const madhusai = (mango)=>{
    if(products.includes(mango)){
      setproducts(products.filter(item=> item!== mango))
    }else{
      setproducts([ ...products,mango])
    }
  }

   const filteredproducts = products.length===0? speakerData : speakerData .filter((orange)=>products.includes(orange.brand))

  return (
        <>
        <Navbar/>
<div className="fullpage">
<div className="proselected">
          {speakerData.map((phone)=>
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
                      <Link to={`/speaker/${item.id}`}>
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

export default Sepaker