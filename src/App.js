import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BuyNow from './components/BuyNow/BuyNow';
import Orders from './components/Orders/Orders';
import CheckOut from './components/CheckOut/CheckOut';
import ManageItems from './components/ManageItems/ManageItems';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/delete">
          <ManageItems/>
        </Route>
        <PrivateRoute path="/checkout">
          <CheckOut/>
        </PrivateRoute>
        <PrivateRoute path="/buy/:name">
          <BuyNow/>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
