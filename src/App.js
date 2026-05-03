import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Questions from './Hooks/Questions';
import Blogs from './components/Blogs';
import Single from './components/Single';
import Login from './components/Login';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './components/Content';
import { useState } from 'react';
import LoginProvider from './components/LoginContext';
import UserProvider from './context/UserContext';



function App() {

  return (
    <>

      <LoginProvider>
        <UserProvider>
          <Router>

            <Header />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path='/questions' element={<Questions />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/post/:id' element={<Single />} />
              <Route path='/login' element={<Login />} />
              <Route path='/content' element={<Content />} />
            </Routes>

          </Router>
        </UserProvider>
      </LoginProvider>

    </>
  )
}

export default App;