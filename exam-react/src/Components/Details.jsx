import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    const [Product, setProduct] = useState({})
    const { id } = useParams();
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>{
        setProduct(json)
    })
}, [])

const addtocart = ()=>{

    fetch('https://fakestoreapi.com/carts',{
        method:"POST",
        body:JSON.stringify(
            {
                userId:id,
                date:"2020-02-03",
                products:[{productId:id,quantity:1}]
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))


}
   


console.log(Product);

  return (
    <div>
       
   

<section class="text-gray-700 body-font overflow-hidden w-full bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={Product.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
     
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{Product.title}</h1>
     
        <p class="leading-relaxed">{Product.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                 </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">{Product.price}</span>
       <Link className='ml-5' to={`../cart/${id}`}>
       <button onClick={addtocart} class="flex ml-auto text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 rounded">Add to cart</button>
       </Link>  
          <button  class="flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">GO BACK</button>

        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Details