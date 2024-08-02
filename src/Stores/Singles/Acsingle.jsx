import React from 'react'
import { acData } from '../data/ac'
import { useParams } from 'react-router-dom'
import { useCart } from '../Context/Cartcontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Acsingle = () => {
    const {id}=useParams()
    const product = acData.find((item)=>item.id === id)
     console.log(id);
     const {addToCart}=useCart()
     const handleAddToCart = ()=>{
        addToCart(product);
        toast.success(`${product.model} added to cart!`);
     }
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
                <button onClick={(handleAddToCart)}>AddCart</button>
            </div>
        </div>
    </div>
    <ToastContainer/>
    </>
  );
}

export default Acsingle;