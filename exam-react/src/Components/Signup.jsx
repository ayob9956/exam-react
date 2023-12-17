import React from 'react'

function Signup() {
  const hundelSiginUp = () =>{
    fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
  }
  return (
    <div>
       
<div class="h-screen bg-slate-50 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <img class="h-14 mb-4 mx-auto" src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png" alt=""/>
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button type='button' onClick={hundelSiginUp} class="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Register</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default Signup