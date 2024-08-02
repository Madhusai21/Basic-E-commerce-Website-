import React from 'react'
import { mobileData } from '../data/mobiles';
const Prodata = () => {
    const FirstFivemobles= mobileData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2> Iphones's</h2>

    </div>
      <div className='productsection'>
          {
              FirstFivemobles.map((item)=>{
                    return(
                      <div className='imgbox'>
                      <img  className=' proimg'src={item.image} alt=' images'/>
                      </div>
                    )
              })
          }
      </div>
      </>
    );
  }
  

export default Prodata