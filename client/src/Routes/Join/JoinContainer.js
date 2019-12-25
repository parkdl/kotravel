import React from "react";
import JoinPresenter from "./JoinPresenter";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password1: null,
      password2: null
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
        headers: {
          crossDomain: true,

          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          name: this.state.name,
          email: this.state.email,
          password1: this.state.password1,
          password2: this.state.password2
        }
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return <JoinPresenter handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
  }
}
