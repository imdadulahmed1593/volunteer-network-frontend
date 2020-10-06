import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import AdminEvents from "./Components/AdminEvents/AdminEvents";
import Events from "./Components/Events/Events";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <Header />
            <Events />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/adminEvents">
            <AdminEvents />
          </Route>

          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
