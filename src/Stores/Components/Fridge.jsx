import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridge = () => {
    const FirstFiveFrigde= fridgeData.slice(0,5)
  return (
    <>
    <div className='product-head'>
    <h2> Fridge</h2>

    </div>
    <div className='productsection'>
        {
            FirstFiveFrigde.map((item)=>{
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

export default Fridge