import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    const FirstFiveImages= mobileData.slice(0,5)
  return (
    <>
    <div className='product-head'>
    <h2> Moblies</h2>

    </div>
        <div className='productsection'>
        {
            FirstFiveImages.map((item)=>{
               return(
                <div className='imgbox'>
                 <img  className ='proimg'src={item.image} at="imges"/>
                 </div>
               )
            })
        }
    </div>
    </>
  );
}

export default Mobiles