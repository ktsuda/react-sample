import React, { Component } from "react"
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import CustomersList from "./CustomersList"
import NoMatchPage from "./NoMatchPage"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ""
    }
  }

  render() {
    return (
      <Router>
      {this.state.token && <NavBar removeToken={this.removeToken} />}
        <div className="container-fluid">
          <Routes>
            {!this.state.token && <Route path="*" element={<Navigate to="/login" />} />}
            {!this.state.token && <Route path="/login" element={<Login setToken={this.setToken} />} />}
            {this.state.token && <Route path="*" element={<Navigate to="/dashboard" />} />}
            {this.state.token && <Route path="/dashboard" element={<Dashboard />} />}
            {this.state.token && <Route path="/customers" element={<CustomersList />} />}
            {this.state.token && <Route path="/cart" element={<ShoppingCart />} />}
          </Routes>
        </div>
      </Router>
    )
  }

  componentDidMount() {
    const cached_token = localStorage.getItem("LoginToken")
    if (cached_token !== null) {
      this.setToken(cached_token)
    }
  }

  setToken = (token) => {
    if (token) {
      this.setState({ token: token })
      localStorage.setItem("LoginToken", token)
    }
  }

  removeToken = () => {
    localStorage.removeItem("LoginToken")
  }
}
