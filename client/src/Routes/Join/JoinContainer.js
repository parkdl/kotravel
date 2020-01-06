import React from "react";
import JoinPresenter from "./JoinPresenter";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password1: null,
      password2: null,
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
      .post("/join", {
        name: this.state.name,
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2
      })
      .then(res => {
        console.log(res);
        if (!res.data.error) {
          console.log("good");
          this.setState({
            redirectTo: res.data.redirectTo
          });
        } else {
          console.log("duplicate");
        }
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return <JoinPresenter handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
  }
}
