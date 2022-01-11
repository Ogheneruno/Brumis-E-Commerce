import React, { useContext } from 'react';
import './App.css';
import Navbar from '../src/navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../src/home/Home';
import { Toaster } from 'react-hot-toast';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Order from '../src/order/Order';
import Pay from '../src/pay/Pay';
import MakePayment from './pay/MakePayment';
import About from './about/About';
import Contact from './contact/Contact';
import Profile from './profile/Profile';
import ForgotPassword from '../src/components/pages/auth/ForgotPassword';
import ResetPassword from '../src/components/pages/auth/ResetPassword';
// import ProductContext from "./context/ProductContext";
import VerifyUser from '../src/components/pages/auth/VerifyUser';
import Shop from './shop/Shop';
import { AuthContext } from './context/AuthContext';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact from="/" component={Home} />
       <Route from="/login" component={user ? <Redirect to="/" /> : Login} />
       <Route from="/register" component={user ? <Redirect to="/" /> : Register} />
       <Route path="/order/:id" component={!user ? <Redirect to="/" /> : Order} />
       <Route path="/pay" component={!user ? <Redirect to="/" /> : Pay} />
       <Route path="/makepayment" component={!user ? <Redirect to="/" /> : MakePayment} />
       <Route path="/profile" component= {!user ? <Redirect to="/" /> : Profile}></Route>
       <Route path="/forgotpassword" component={ForgotPassword} />
       <Route path="/reset-password" component={ResetPassword} />
       <Route path="/verify-user" component={VerifyUser} />
       <Route path="/shop" component={Shop} /> 
        {/* <ProductContext>
          <Route path="/order/:id" component={Order} />
          <Route path="/pay" component={Pay} />
          <Route path="/makepayment" component={MakePayment} />
        </ProductContext> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

     </Switch>

     <Toaster 
      position="top-right"
      toastOptions={{
        duration: 5000,
        success: {
          style: {
            background: 'green',
            color: 'white'
          },
        },
        error: {
          style: {
            background: 'red',
            color: 'white'
          },
        },
      }}
    />

    </div>
  );
}

export default App;
