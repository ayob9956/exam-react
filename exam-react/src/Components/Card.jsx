import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Card() {
    const [Products, setProducts] = useState([])
   useEffect(() => {


    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
               
            })
   
   }, [])
   

  return (

    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1   justify-items-center  w-full '>

{Products.map((item)=>(
    <div key={item.id} className=''>
<div  className="card h-96 max-md:h-72 card-compact w-full m-3 max-md:w-72 bg-base-100 shadow-xl">
  <figure><img className='w-fit h-full' src={item.image} alt={item.title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.price}</p>
    <div className="card-actions justify-end">
     <Link to={`/details/${item.id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>

    </div>
    
        
))}
        
    </div>
  )
}

export default Card