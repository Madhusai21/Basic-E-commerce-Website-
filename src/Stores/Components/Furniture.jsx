import React from 'react'
import { furnitureData } from '../data/furniture';
const Furniture = () => {
    const FirstFiveFurniture= furnitureData.slice(0,5)
    return (
      <>
      <div className='product-head'>
    <h2>Furniture</h2>

    </div>
      <div className='productsection'>
          {
              FirstFiveFurniture.map((item)=>{
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
  

export default Furniture