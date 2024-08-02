import React from 'react'
import { tvData } from '../data/tv';
const Tv = () => {
    const FirstFiveTv= tvData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2>Tv's</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveTv.map((item)=>{
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
  

export default Tv