import React from "react";
import LoginPresenter from "./LoginPresenter";

import { Redirect } from "react-router-dom";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password1: null,
      redirectTo: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/login", {
        email: this.state.email,
        password1: this.state.password1
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            user: res.data.user,
            redirectTo: res.data.redirectTo
          });
        } else {
          this.setState({
            redirectTo: res.data.redirectTo
          });
        }
      });
  };

  render() {
    const { redirectTo, loggedIn, user } = this.state;
    console.log(redirectTo, loggedIn, user);
    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo }} loggedIn={loggedIn} user={user} />;
    } else {
      return <LoginPresenter handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
    }
  }
}
