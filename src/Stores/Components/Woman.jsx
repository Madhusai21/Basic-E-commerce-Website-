import React from 'react'
import { womanData } from '../data/woman';
const Woman = () => {
    const FirstFiveWoman= womanData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2>Woman's</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveWoman.map((item)=>{
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
  

export default Woman