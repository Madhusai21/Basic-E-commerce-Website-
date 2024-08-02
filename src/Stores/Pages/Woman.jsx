import React, { useState } from 'react'
import { womanData } from '../data/woman';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Woman = () => {

    const [human,sethuman]=useState([])

    const mahesh=(oranges)=>{
        if(human.includes(oranges)){
            sethuman(human.filter(item=> item!== oranges))
        } else{
            sethuman([ ...human , oranges])
        }
    }

     const filterhuman = human.length===0? womanData : womanData.filter((hill)=>human.includes(hill.brand))

    return (
        <>
        <Navbar/>
        <div className="fullpage">
            <div className="proselected">
           { womanData.map((body)=>{
            return(
                <div className="pro-checkbox">
                    <label>
                        <input type="checkbox"
                        checked={human.includes(body.brand)}
                        onChange={()=> mahesh(body.brand)}/>
                        {body.brand}
                    </label>
                </div>
            )
           })} 
        </div>
            <div className='productsections'>
            {
                filterhuman.map((item)=>{
                   return(
                    <div>
                        <Link to={`/woman/${item.id}`}> 
                        <div className='imgbox'>
                     <img  className ='proimg'src={item.image} at="imges"/>
                     </div>
                     </Link>
                   
                     <div className='pro-model'>
                          {item.brand},{item.category}
                        </div>
                        </div>
                   )

                })
            }
        </div>
        </div>
        
        </>
      );
    }
export default Woman