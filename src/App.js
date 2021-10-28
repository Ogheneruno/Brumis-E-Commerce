import React from 'react';
import './App.css';
import Navbar from '../src/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from '../src/home/Home';
// import Login from '../src/login/Login';
// import Register from '../src/register/Register';
import Order from '../src/order/Order';
import Pay from '../src/pay/Pay';
import MakePayment from './pay/MakePayment';



function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact from="/" component={Home} />
       {/* <Route from="/login" component={Login}></Route> */}
       {/* <Route from="/register" component={Register}></Route> */}
       <Route path="/order" component={Order} />
       <Route path="/pay" component={Pay} />
       <Route path="/makepayment" component={MakePayment} />
     </Switch>
    </div>
  );
}

export default App;
