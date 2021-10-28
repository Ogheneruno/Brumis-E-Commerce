import React from 'react';
import './App.css';
import Home from './home/Home';
import Arrival from './arrival/Arrival';
import { BrowserRouter as Router } from "react-router-dom";
import Product from './product/Product';
import Testimonial from './testimonial/Testimonial';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Pay from './pay/Pay';
import Order from './order/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        <Arrival/>
        <Product/>
        <Testimonial/>
        <Footer/> 
      </Router>
     
    </div>
  );
}

export default App;
