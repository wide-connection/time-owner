import React, { Component } from 'react'
import './Header.scss'
import logo from '../Footer/Images/Logo_transparent.png';

class Header extends Component {  
  
    render() {      
        return (                    
          <div className="App">
            <nav className="navbar">
              <div className="navbar_logo">
               <a href="/"><img src={logo} alt="logo" width="100px"  /></a>           
              </div>
              <ul className="navbar_menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>

                  <li><a href="/contact">Contact</a></li>   
                  <li><a href="/statistics">Statistics</a></li>                   
                  <li><a href="/login" className="login_btn">Login</a></li>

              </ul>

              <div className="logout">  
                  <li><a href="https://github.com/wide-connection/time-owner"><i className="fab fa-github git-icon"></i></a></li>
              <li><a href="/login" className="login_btn">Logout</a></li>              
              </div>
            </nav> 
          </div>
 
        );
    }
}

export default Header; 