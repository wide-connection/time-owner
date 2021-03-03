import React, { Component } from 'react'
import './Header.css'

class Header extends Component {  
  
    render() {      
        return (                    
          <div className="App">
            <nav className="navbar">
              <div className="navbar_logo">
                <i class="fas fa-calendar-week"></i> &nbsp;
              <a href="/#">Chocolander</a>
              </div>

              <ul className="navbar_menu">
                  <li><a href="/#">Home</a></li>
                  <li><a href="/#">Login</a></li>
                  <li><a href="/#">About Us</a></li>
                  <li><a href="/#">Contact</a></li>         
                  <li><a href="/#">Sponsers</a></li>           
              </ul>

              <div className="navbar_icons">                
                  <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="/#"><i class="fab fa-github"></i></a></li>
              </div>

              <a href="/#" className="navbar_toogleBtn">
                  <i class="fas fa-bars"></i>
              </a>

            </nav>
         
          </div>
 
        );
    }
}

export default Header; 