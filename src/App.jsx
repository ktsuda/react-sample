import React, { Component } from "react"
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import CustomersList from "./CustomersList"
import NoMatchPage from "./NoMatchPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ""
    }
  }

  render() {
    if (!this.state.token) {
      return (
        <div className="container-fluid">
          <Login setToken={this.setToken} />
        </div>
      )
    } else {
      return (
        <BrowserRouter>
          <NavBar />
          <div className="container-fluid">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/customers" exact element={<CustomersList />} />
              <Route path="/cart" exact element={<ShoppingCart />} />
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </div>
        </BrowserRouter >
      )
    }
  }

  setToken = (token) => {
    if (token) {
      this.setState({ token: token })
    }
  }
}
