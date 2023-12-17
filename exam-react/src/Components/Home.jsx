import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))

const {id} = useParams();

    // fetch('https://fakestoreapi.com/carts')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
  return (
    <div>

    </div>
  )
}

export default Home