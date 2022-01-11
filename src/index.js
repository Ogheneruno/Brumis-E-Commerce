import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {AuthContextProvider} from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </Router>,
  document.getElementById('root')
);
