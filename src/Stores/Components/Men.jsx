import React from 'react'
import { menData } from '../data/men';
const Men = () => {
    const FirstFiveMen= menData.slice(0,5)
    return (
      <>
     <div className='product-head'>
    <h2> Men's</h2>
    </div>
      <div className='productsection'>
          {
              FirstFiveMen.map((item)=>{
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
  
export default Men