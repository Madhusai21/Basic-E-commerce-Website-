import React from 'react'
import { speakerData } from '../data/speaker'
import { useParams } from 'react-router-dom'

const Spearsingle = () => {
    const {id}=useParams()
    const product = speakerData.find((item)=>item.id === id)

  return (
    <>
    <div className='ind-page'>
        <div className='ind-image'>
            <img src={product.image} alt='images'/>
        </div>
        <div className='ind-details'>
            <div className='ind-model'>
                <h2>{product.model}</h2>
            </div>
            <div className='ind-company'>
                <h2>{product.company}</h2>
            </div>
            <div className='ind-price'>
                <h1>{product.price}</h1>
            </div>
            <div className='ind-description'>
                <p>{product.description}</p>
            </div>
            <div className='ind-category'>
                <h2>{product.category}</h2>
                <button>AddCart</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default Spearsingle;