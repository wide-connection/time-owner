import React, { Component } from 'react'
import './Header.css'
import logo from '../Images/Chocolander.png'

class Header extends Component {  
  
    render() {      
        return (                    
          <div className="App">
            <nav className="navbar">
              <div className="navbar_logo">
               <a href="/"><img src={logo} alt="logo" width="200px" /></a>           
              </div>

              <ul className="navbar_menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact</a></li>                    
                  <li><a href="/login" className="login_btn">Login</a></li>
              </ul>

              <div className="navbar_icons">                
                  <li><a href="https://github.com/wide-connection/time-owner"><i class="fab fa-github"></i></a></li>
              </div>
        
            </nav>
         
          </div>
 
        );
    }
}

export default Header; 