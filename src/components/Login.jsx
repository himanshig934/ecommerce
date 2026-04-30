import React from 'react'
import  loginimg  from '../images/login.jpg'

export default function Login(props) {
  return (

 <>
    <div class="min-h-screen flex items-center justify-center">

      <div class="bg-white shadow-lg rounded-xl flex w-[900px] overflow-hidden">

        <div class="w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img src={loginimg} alt="login illustration" class="w-full max-w-xs" />
        </div>

        <div class="w-1/2 p-10 flex flex-col justify-center">
              <h1 className='text-center text-[20px] text-green-600'>{props.islogin ? 'you are logged in' : 'logged out'}</h1>

          <form class="space-y-4">

            <input type="email" placeholder="Email address" class="w-full px-4 py-2 border rounded-md focus:outline-none 
          focus:ring-2 focus:ring-blue-500" />

            <input type="password" placeholder="Password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

           {props.islogin ?  <button class="w-full bg-red-800 text-white py-2 rounded-md hover:bg-blue-700 transition">
              LOGOUT</button>
                 :  <button class="w-full bg-green-800 text-white py-2 rounded-md hover:bg-blue-700 transition">
              LOGIN
            </button>}

          </form>

        </div>

      </div>

    </div>
</>
  )
}
