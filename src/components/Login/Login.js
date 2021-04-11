import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import './Login.css';

import LoginImg from './image/loginimg.png';

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
    return (
      <Fragment>
        <h2 className="PageTitle">Log In</h2>
        <Container>
          <Row>
            <Col lg={5} md={6} sm={12} className="p-5 m-auto">
              <div className="LoginBox p-5 ">
                <img className="LoginImg" src={LoginImg} alt="" />

                <Form className="mt-3">
                  <br />
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                    <small
                      id="passwordHelpInline"
                      class="text-muted"
                      style={{ marginLeft: '30px' }}
                    >
                      Must be 8-20 characters long.
                    </small>
                  </Form.Group>
                  <br />

                  <div>
                    <p className="forgot-password text-center">
                      <a href="#">Forgot ID?</a> /{'   '}
                      <a href="#">Forgot Password?</a>
                    </p>
                  </div>
                  <div className="noaccount" style={{ marginLeft: '47px' }}>
                    <span>
                      No account? <a href="#"> Sign up </a>
                    </span>
                  </div>
                  <br />
                  <Button className="btn-block" variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Login;
