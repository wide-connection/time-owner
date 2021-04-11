import React, { Component } from 'react';
import './Login.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        userID: String,
        password: String,
      },
      loggedIn: false,
    };
  }

  render() {
    // if (this.state.loggedIn) {
    //   <p>render works</p>;
    // }
    // return(
    //     <p>render works2</p>;
    // );

    return <h2 className="titleLogIn">Log In</h2>;
  }
}
export default Login;
