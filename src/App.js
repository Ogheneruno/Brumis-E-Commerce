import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './home/Home';
import Arrival from './arrival/Arrival';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from './product/Product';
import Testimonial from './testimonial/Testimonial';
import Footer from './footer/Footer';
import Rate from './rate/Rate';
import Order from './order/Order';
import Pay from './pay/Pay';

function App() {
  return (
    <div className="App">
      <Router>
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
