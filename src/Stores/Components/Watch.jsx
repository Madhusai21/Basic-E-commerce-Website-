import React from 'react'
import { watchData } from '../data/watch';
const Watch = () => {
    const FirstFiveWatch= watchData.slice(0,5)
    return (
      <>
    <div className='product-head'>
    <h2> Watch's</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveWatch.map((item)=>{
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
  

export default Watch