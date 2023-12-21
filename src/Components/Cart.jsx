import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Cart() {
    const { id } = useParams();
    useEffect(() => {
     fetch(`https://fakestoreapi.com/carts/${id}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
    }, [])
    
    const [Products, setProducts] = useState({})
   useEffect(() => {


    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
               
            })
   
   }, [])
   
  return (
    <div className='h-screen '>

<section class="flex items-center bg-stone-200  font-poppins dark:bg-green-200 ">
<div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
<div class="p-8 bg-gray-50 dark:bg-green-950">
<h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
<div class="flex flex-wrap -mx-4">
<div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
<div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
<div class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
<h2 class="font-bold text-gray-500 dark:text-white"></h2>
</div>
<div class="hidden px-4 lg:block lg:w-2/12">
<h2 class="font-bold text-gray-500 dark:text-gray-400">Price</h2>
</div>
<div class="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
<h2 class="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
</div>
<div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
<h2 class="font-bold text-gray-500 dark:text-gray-400"> Subtotal</h2>
</div>
</div>
<div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
<div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
<div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
<div class="flex flex-wrap items-center -mx-4">
<div class="w-full px-4 mb-3 md:w-1/3">
<div class="w-full h-96 md:h-24 md:w-24">
<img src={Products.image} alt="" class="object-fill w-full h-full"/>
</div>
</div>
<div class="w-2/3 px-4">
<h2 class="mb-2 text-xl font-bold dark:text-gray-400">{Products.title}</h2>
<p class="text-gray-500 dark:text-gray-400 ">{Products.description}</p>
</div>
</div>
</div>
<div class="hidden px-4 lg:block lg:w-2/12">
<p class="text-lg font-bold text-orange-500 dark:text-gray-400">{Products.price}</p>

</div>



<div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
<p class="text-lg font-bold text-orange-500 dark:text-gray-400">{Products.price}</p>
</div>
</div>
</div>
<div class="flex flex-wrap items-center gap-4">
<span class="text-gray-700 dark:text-gray-400">Apply Coupon</span>
<input type="text" class="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800" placeholder="x304k45" required=""/>
<button class="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-orange-500 rounded-md hover:bg-orange-600 md:flex-none">Apply</button>
</div>
</div>
<div class="w-full px-4 xl:w-4/12">
<div class="p-6 border border-orange-100 dark:bg-gray-900 dark:border-gray-900 bg-orange-50 md:p-8">
<h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
<div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
<span class="text-gray-700 dark:text-gray-400">Subtotal</span>
<span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">{Products.price}</span>
</div>
<div class="flex items-center justify-between pb-4 mb-4 ">
<span class="text-gray-700 dark:text-gray-400 ">Shipping</span>
<span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
</div>
<div class="flex items-center justify-between pb-4 mb-4 ">
<span class="text-gray-700 dark:text-gray-400">Order Total</span>
<span class="text-xl font-bold text-gray-700 dark:text-gray-400">{Products.price}</span>
</div>
<h2 class="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
<div class="flex items-center mb-4 ">
<a href="#">
<img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
</a>
<a href="#">
 <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
</a>
<a href="#">
<img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" class="object-cover h-16 mr-2 w-26"/>
</a>
</div>
<div class="flex items-center justify-between ">
<button class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-orange-500 rounded-md hover:bg-orange-600">Checkout</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Cart