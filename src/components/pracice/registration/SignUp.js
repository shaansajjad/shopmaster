import React from "react";
import "../../../css/Registration.css";
import { isValidName, isValidEmail, isValidPassword } from "./Validation";
import ShowValues from "./ShowValues";
class SignUp extends React.Component {
  state = {
    data: {
      username: "",
      email: "",
      password: ""
    },
    showValues: [],
    errors: ""
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  resetForm = e => {
    e.preventDefault();
    this.setState({
      data: {
        username: "",
        email: "",
        password: ""
      },
      errors: ""
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let userName = this.state.data.username;
    let email = this.state.data.email;
    let password = this.state.data.password;
    let userRegistrationObj = {
      name: userName,
      email: email,
      password: password
    };
    if (
      isValidName(userName) &&
      isValidEmail(email) &&
      isValidPassword(password)
    ) {
      console.log("Valid");
      let showValues = this.state.showValues;
      showValues.push(userRegistrationObj);
      console.log("ShowValues.........", showValues);
      this.setState({ showValues: showValues }, () => {
        console.log(this.state);
        this.setState({ errors: "" });
      });
    } else {
      this.setState({ errors: "Please fill the valid details" });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="left-half">
          <article>
            <h1>Sajjad</h1>
            <div className="welcome-note">
              <h3>Welcome back!</h3>
              <p>
                We are glad to see you again! Instant deposits, withdrawals &
                payouts trusted by millions worldwide.
              </p>
            </div>
          </article>
        </div>
        <div className="right-half">
          <div className="form-wrapper">
            <article>
              <h3>Form Details</h3>
            </article>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="emailAddress">User Name</label>
                <input
                  type="username"
                  placeholder="Enter Username"
                  id="username"
                  className="form-control"
                  name="username"
                  value={data.username}
                  onChange={this.onChange}
                  required
                />
                <small>{this.state.errors}</small>
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={this.onChange}
                  required
                />
                <small>{this.state.errors}</small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  className="form-control"
                  name="password"
                  value={data.password}
                  onChange={this.onChange}
                  required
                />
                <small>{this.state.errors}</small>
              </div>
              <button onClick={this.onSubmit} type="submit">
                Submit
              </button>
            </form>
            <p className="dont-have-account">
              Want to
              <a className="signup-link" onClick={this.resetForm}>
                Reset Form?
              </a>
            </p>
          </div>
        </div>
        {this.state.showValues.map(({ email, ...otherprops }) => (
          <ShowValues key={email} {...otherprops} />
        ))}
      </div>
    );
  }
}

export default SignUp;
