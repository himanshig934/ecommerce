import React, { useContext } from 'react'
import loginimg from '../images/login.jpg'
import { LoginContext } from './LoginContext';
import { UserContext } from '../context/UserContext';

export default function Login() {


  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);

  return (

    <>
      <div class="min-h-screen flex items-center justify-center">

        <div class="bg-white shadow-lg rounded-xl flex w-[900px] overflow-hidden">

          <div class="w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <img src={loginimg} alt="login illustration" class="w-full max-w-xs" />
          </div>

          <div class="w-1/2 p-10 flex flex-col justify-center">
            <h1 className='text-center text-[20px] text-green-600'>
              {isLogin ? 'you are logged in' : 'logged out'}</h1>

            <form class="space-y-4">

              <input type="email" placeholder="Email address" class="w-full px-4 py-2 border rounded-md focus:outline-none 
                 focus:ring-2 focus:ring-blue-500" />

              <input type="password" placeholder="Password"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

              {/* submit button */}
              <button class="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}
