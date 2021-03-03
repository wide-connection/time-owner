import React, { Component } from 'react';
import './Footer.css'
import logo from '../Images/Chocolander.png'

class Footer extends Component {
    render() {
        return (
        <div className="App">
            <div className="page-content">
                Welcome Page
            </div>

            <footer>
                <div className="footer-container">
                    <div className="left-col">
                    <img src={logo} alt="logo" className="logo"/>                    
                        <div className="social-media">
                            <a href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>  
                            <a href="/#"><i class="fab fa-github"></i></a>
                        </div>
                        <p className="rights-text">&copy; 2020 Created by Team Wide Connection All rights reserved.</p>
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
