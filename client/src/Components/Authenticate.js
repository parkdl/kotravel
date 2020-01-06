import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = styled.div``;

const Ul = styled.ul``;

const Li = styled.li``;

const SLink = styled(Link)``;

const DisplayAuth = props => {
  if (props.loggedIn) {
    return (
      <Nav>
        <Ul>
          <Li>
            <SLink to="#" onClink={props.logout}>
              LogOut
            </SLink>
          </Li>
        </Ul>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Ul>
          <Li>
            <SLink to="/join">Join</SLink>
          </Li>
          <Li>
            <SLink to="/login">LogIn</SLink>
          </Li>
        </Ul>
      </Nav>
    );
  }
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    };
    /*this.login = this.login.bind(this);*/
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    axios.get("/user").then(res => {
      console.log(res.data);
      if (!!res.data.user) {
        this.setState({
          loggedIn: true,
          user: res.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  /*login = (email, password1) => {
    axios
      .post("/login", {
        email,
        password1
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            user: res.data.user
          });
        }
      });
  };*/

  logout = event => {
    event.preventDefault();
    axios.post("/logout").then(res => {
      if (res.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  };

  render() {
    return <DisplayAuth logout={this.logout} loggedIn={this.state.loggedIn} />;
  }
}
