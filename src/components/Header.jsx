import React, { useContext } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { LoginContext } from './LoginContext';

export default function Header() {

    const { isLogin, setIsLogin } = useContext(LoginContext);


  return (
    <>
      <header>
        <div className="container-fluid py-4 bg-[#eeeeee] sticky">
          <div className="header max-w-7xl justify-center m-auto">
            <img src={logo} alt="logo" className='w-44 h-auto m-auto py-4' />

            <div className="navbar">
              <div className="navbar-menu max-w-5xl justify-center m-auto">
                <ul className='flex gap-10 m-auto justify-center py-2'>
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/about-us'><li>About Us</li></Link>
                  <Link to='/#'><li>Our Products</li></Link>
                  <Link to='/contact-us'><li>Contact Us</li></Link>
                  <Link to='/blogs'><li>Blogs</li></Link>
                  <Link to='/login'><li>Login</li></Link>
                  <Link to='/content'><li>Content</li></Link>
                </ul>
              </div>

              <div>
                {isLogin ?  <button class="w-full bg-red-800 text-white py-2 rounded-md hover:bg-blue-700 transition px-4">
              LOGOUT</button>
                 :  <button class="w-full bg-green-800 text-white py-2 rounded-md hover:bg-blue-700 transition px-4">
              LOGIN
            </button>}
              </div>

            </div>

          </div>
        </div>
      </header>

    </>

  )
}
