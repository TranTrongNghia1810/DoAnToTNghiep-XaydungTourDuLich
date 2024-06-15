import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import history from './helpers/history';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginContainer from './containers/LoginContainer';
import HomePage from './components/Layout/HomePage';
import Register from '../src/components/Register/Register'
import Admin from './components/Admin/Admin';
import ManageAccount from './components/Admin/Content/ManageAccount';
import ManageTour from './components/Admin/Content/ManageTour';
import Login from './components/Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/app' element={<App />} />
      
      <Route path='/admins' element={<Admin />}>
        <Route path='manage-tours' element={<ManageTour/>} />
        <Route path='manage-accounts' element={<ManageAccount />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
