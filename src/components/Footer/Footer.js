import React, { Component } from 'react';
import './Footer.css'
import logo from '../Footer/Images/Logo_transparent.png';

class Footer extends Component {
    render() {
        return (
        <div className="App">
            <div className="page-content">
              
            </div>

            <footer>
                <div className="footer-container">
                    <div className="left-col">
                    <img src={logo} alt="logo" className="logo"/>                    
                        <div className="social-media">                           
                            <a href="https://github.com/wide-connection/time-owner"><i class="fab fa-github"></i></a>
                        </div>
                        <p className="rights-text">&copy; 2021 Created by Team Wide Connection All rights reserved.</p>
                    </div>
                    <div className="right-col">
                        <h1>Our updates</h1>
                        <div className="border"></div>
                        <p>Enter your Email to get our updates</p>
                        <form action="" class="updates-form">
                            <input type="email" name="" class="txtb" placeholder="Enter you email"/>
                            <input type="submit" class="btn" value="Submit" name=""/>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
        )
    }
}
export default Footer; 
