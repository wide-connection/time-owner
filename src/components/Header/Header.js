import React, { Component } from 'react'; 
import './Header.css'; 
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
          <div className="App">
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
      Chocolander <i class="fas fa-calendar-week"></i>
        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#sign">SignUp</Nav.Link>
    </Nav>
 
    </Navbar>
          </div>
        );
    }
}

export default Header; 