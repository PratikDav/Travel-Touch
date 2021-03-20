import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';

import Array from './Array/Array'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Booking/Booking';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =  useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      <Router>
      <Header/>
        <hr/>
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/">
              <Array />
            </Route>
            
          </Switch>
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;
