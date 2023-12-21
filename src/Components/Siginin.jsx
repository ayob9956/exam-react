import React, { useEffect, useState } from 'react'

function Siginin() {
const [UserData, setUserData] = useState([])
const [Login, setLogin] = useState({}) 

// const islocal = localStorage.setItem("Token",Login)
useEffect(() => {
    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json))
}, [])

    const  hundelSiginin =()=>{
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            }), headers: {
                "Content-Type": "application/json"
              }
            
        })
            .then(res=>res.json())
            .then(json=>{
                if (json !== null) {
                    
                    setLogin(json)
                 
                }
            })
    }
  return (
    <div>
        <div class="h-screen bg-slate-50 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <img class="h-14 mb-4 mx-auto" src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png" alt=""/>
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Login</h1>
        <div>
          <label for="username" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input name='username' value={UserData.username}  onChange={(e)=>  setUserData({
        ...UserData,
          [e.target.name]: e.target.value})} type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      
        <div>
          <label for="password" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input name='password' value={UserData.password}  onChange={(e)=>  setUserData({
        ...UserData,
          [e.target.name]: e.target.value})}type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button type='button' onClick={hundelSiginin} class="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Login</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default Siginin