import React from 'react'

function NavBar() {
  return (
    <div className='w-full min-w-screen'>
        <div className="navbar bg-green-900 w-full">
  <div className="navbar-start">
    
     
  
    <a href='/' className="btn btn-ghost text-white text-xl max-sm:text-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322" className='w-20 h-8 max-sm:w-16' alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
       
  </div>
  <div className="navbar-end gap-5 max-sm:">
    <a href='/siginup' className="btn btn-ghost text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">Signup</a>
    <a href='/login' className="btn btn-ghost text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</a>
   <a href='/cart'><svg  className='max-sm:w-9' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></a> 
  </div>
</div>
<input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-green-900 " />

<ul className='gap-6 flex text-center w-full bg-green-900 text-white p-5 max-sm:p-1 max-sm:font-thin max-md:font-light font-semibold justify-start'>
            <li>Today Dael</li>
            <li>Registry</li>
            <li>Customer Service</li>
            <li>Gift Cards</li>
            <li>Sell</li>
           
        </ul>
        <div>
   
</div>

    </div>
  )
}

export default NavBar