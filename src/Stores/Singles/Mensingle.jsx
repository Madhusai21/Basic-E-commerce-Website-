import React from 'react'
import { menData } from '../data/men'
import { useParams } from 'react-router-dom'
import { useCart } from '../Context/Cartcontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mensingle = () => {
    const {id}=useParams()
    const product = menData.find((item)=>item.id === id)
     console.log(id);
     const {addToCart,cartitems}=useCart()
     const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.model} added to cart!`);
     };
  return (
    <>
    <div className='ind-pages'>
        <div className='ind-images'>
            <img src={product.image} alt='images'/>
        </div>
        <div className='ind-detail'>
            <div className='ind-models'>
                <h2>{product.model}</h2>
                <h2>{product.company}</h2>
                <h1>{product.price}</h1>
                <p>{product.description}</p>
                <h2>{product.category}</h2>
                <button onClick={(handleAddToCart)}>AddCart</button>
            </div>
        </div>
    </div>
    <ToastContainer/>
    </>
  );
}

export default Mensingle;