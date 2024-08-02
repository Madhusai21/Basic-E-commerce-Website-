import React from 'react'
import { speakerData } from '../data/speaker';
const Speaker = () => {
    const FirstFiveSpeaker= speakerData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2> Speaker's</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveSpeaker.map((item)=>{
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
  

export default Speaker