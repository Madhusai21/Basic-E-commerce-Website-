import React from 'react'
import { booksData } from '../data/books';
const Books = () => {
    const FirstFiveBooks= booksData.slice(0,5)
    return (
      <>
      <div className='product-head'>
      <h2> Books</h2>
      </div>
      
      <div className='productsection'>
          {
              FirstFiveBooks.map((item)=>{
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
  
export default Books