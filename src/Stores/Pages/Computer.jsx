import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Computer = () => {
    const [data,setdata]=useState([])

    const gopika=(apple)=>{
        if(data.includes(apple)){
            setdata(data.filter(item=>item!==apple))
        } else{
            setdata([... data,apple])
        }
    }

      const filterdata = data.length===0? computerData: computerData.filter((banana)=>data.includes(banana.company))

       

    return (
        <>
        <Navbar/>
        <div className="fullpage"><div className="proselected">
            { computerData.map((lab)=>{
                return(
                    <div className="pro-checkbox">
                        <label>
                            <input type="checkbox" 
                            checked={data.includes(lab.company)}
                            onChange={()=> gopika(lab.company)}/>
                        </label>
                        {lab.company}
                    </div>
                )
            }
            )}
        </div>
            <div className='productsections'>
            {
                filterdata.map((item)=>{
                   return(
                    <div>
                        <Link to={`/computers/${item.id}`}><div className='imgbox'>
                     <img  className ='proimg'src={item.image} at="imges"/>
                     </div>
                     </Link>
                     <div className='pro-model'>
                          {item.company},{item.model}
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


export default Computer