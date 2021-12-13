import React, { Component } from "react"

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      message: ""
    }
  }

  render() {
    return (
      <React.StrictMode>
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row m-1 p-2">
          <label className="col-lg-4">Email:</label>
          <input type="text" className="form-control" value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value }) // async
            }}
          />
        </div>
        <div className="form-group form-row m-1 p-2">
          <label className="col-lg-4">Password:</label>
          <input type="password" className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value })
            }}
          />
        </div>
        <div className="text-end m-1 p-2">
          {this.state.message}
          <button className="btn btn-primary" onClick={this.onLoginClick}
            disabled={!this.validateForm()}
          >
            Login
          </button>
        </div>
      </React.StrictMode>
    )
  }

  validateForm() {
    return this.state.email.includes('@') > 0 && this.state.password.length > 6
  }

  onLoginClick = async () => {
    var resp = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    )
    var body = await resp.json()
    if (body.length === 1) {
      this.setState({
        message: <span className="text-success me-2">Successfully Logged-in</span>
      })
      this.props.setToken(body[0].email)
    } else {
      this.setState({
        message: <span className="text-danger me-2">Invalid login, please try again</span>
      })
    }
  }
}
