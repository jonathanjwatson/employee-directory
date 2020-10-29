import React, { Component } from "react";

class Login extends Component {
  state = {
    emailAddress: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // prevent default
    event.preventDefault();
    // Make an API call to my user auth service
    // If success response
    // Redirect to Shop
    // debugger;
    this.props.history.push("/shop");
    // If error
    // Show error
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12  text-center">
                <h1>Please sign in below:</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="emailAddress"
                      value={this.state.emailAddress}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
