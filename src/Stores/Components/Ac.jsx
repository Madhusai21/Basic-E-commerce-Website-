import React from 'react'
import { acData } from '../data/ac';
const Ac = () => {
    const FirstFiveAC= acData.slice(0,5)
  return (
    <>
    <div className='product-head'>
    <h2> Ac Machines</h2>
    </div>
    <div className='productsection'>
        {
            FirstFiveAC.map((item)=>{
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
export default Ac