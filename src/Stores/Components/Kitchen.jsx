import React from 'react'
import { kitchenData } from '../data/kitchen';
const Kitchen = () => {
    const FirstFiveKitchen= kitchenData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2> Kitchen</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveKitchen.map((item)=>{
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
  

export default Kitchen