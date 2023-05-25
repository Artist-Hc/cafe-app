import React from 'react'
import Contact from '../pages/Contact'
import Home from '../pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppMenu from '../pages/AppMenu';
import Navbar from '../companents/Navbar';
import Footer from '../companents/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
 <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact/>} />
        
        <Route path='' element={<PrivateRouter/>}>
        <Route path="menu" element={<AppMenu/>}/>
        </Route>
       
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      <Footer />
 </Router>
    
  )
}


   export default AppRouter;
  