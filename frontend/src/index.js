import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/Home/HomePage';
import Signup from './landing-page/signup/Signup';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/ProductPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';
import NavBar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

