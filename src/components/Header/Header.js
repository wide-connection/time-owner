import React, { Component } from 'react'; 
import './Header.css'; 
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
          <div className="App">
            <nav className="navbar">

              <div className="navbar_logo">
              <i class="far fa-calendar fa -alt"></i>
              <a href="">Chocolander</a>
              </div>

              <div className="navbar_menu">

              </div>

              <div className="navbar_links">

              </div>

            </nav>
          </div>
        );
    }
}

export default Header; 