import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {
    const FirstFiveComputers=computerData.slice(0,5)
  return (
    <>
    <div className='product-head'>
    <h2>Computers</h2>
    </div>
    <div className='productsection'>
        {
            FirstFiveComputers.map((items)=>{
                  return(
                    <div className='imgbox'>
                    <img  className=' proimg'src={items.image} alt=' images'/>
                    </div>
                  )
            })
        }
    </div>
    </>
  );
}

export default Computers