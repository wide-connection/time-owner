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
        <h2 className="PageTitle" style={{ 'margin-left': '840px' }}>
          Log In
        </h2>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
              <div className="LoginBox p-5">
                <img className="LoginImg" src={LoginImg} alt="" />

                <Form className="mt-3">
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>

                  <a className="ml-3" href="#">
                    Forgot Password
                  </a>

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
