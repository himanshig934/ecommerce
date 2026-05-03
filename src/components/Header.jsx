import React, { useContext } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { LoginContext } from './LoginContext';
import { UserContext } from '../context/UserContext';

export default function Header() {

  const { isLogin } = useContext(LoginContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <header className='sticky top-0 z-50 bg-[#eeeeee]'>

        <div className="max-w-7xl mx-auto px-6 py-4">

          {/* Top Header */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <img src={logo} alt="logo" className='w-40 h-auto'/>

            {/* Navbar + Buttons */}
            <div className="flex items-center gap-10">

              {/* Nav Links */}
              <ul className='flex items-center gap-8 text-[15px] font-medium'>

                <Link to='/'><li>Home</li></Link>
                <Link to='/about-us'><li>About Us</li></Link>
                <Link to='/'><li>Our Products</li></Link>
                <Link to='/contact-us'><li>Contact Us</li></Link>
                <Link to='/blogs'><li>Blogs</li></Link>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/content'><li>Content</li></Link>

              </ul>

              {/* User Section */}
              <div className='flex items-center gap-4'>

                <p className='font-medium'>
                  Hello {
                 
                 isLogin ? 'himanshi'
                          
                 :

                 ''
                 
                }

                </p>

                {
                  isLogin ?

                    <button className="bg-red-800 text-white py-2 px-5 rounded-md hover:bg-red-700 transition text-[12px]">
                      LOGOUT
                    </button>

                    :

                    <button className="bg-green-800 text-white py-2 px-5 rounded-md hover:bg-green-700 transition text-[12px]">
                      LOGIN
                    </button>
                }

              </div>

            </div>

          </div>

        </div>

      </header>
    </>
  )
}