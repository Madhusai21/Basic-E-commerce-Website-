import React from 'react'
import { mobilesData} from '../data/proData'
import Navbar from '../Components/Navbar';
const Iphones = () => {
    return (
        <>
        <Navbar/>
        <div className='product-heads'>
        <h2>iphone's</h2>
        </div>
            <div className='productsections'>
            {
                mobilesData.map((items)=>{
                   return(
                    <div>
                    <div className='imgbox'>
                     <img  className ='proimg'src={items.image} at="imges"/>
                     </div>
                     <div className='pro-model'>
                          {items.company},{items.model}
                        </div>
                        </div>
                   )

                })
            }
        </div>
        </>
      );
    }

export default Iphones