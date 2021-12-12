import React, { Component } from "react";
import NavBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";
// import Login from "./Login"
import Dashboard from "./Dashboard"

export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <NavBar />
        {
          // <ShoppingCart />
          //<Login />
        }
      <Dashboard />
      </React.StrictMode>
    );
  };
};
