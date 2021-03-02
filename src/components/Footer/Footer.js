import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col">
                            <h4>Chocolander</h4>
                            <ul className="list-unstyled">
                                <li>123-456-7890</li>
                                <li>Toronto, Ontario</li>
                                <li>Virtual Company</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="col">
                            <h4>STAFF</h4>
                            <ul className="list-unstyled">
                                <li>Elena Sakhnovitch</li>
                                <li>Hyun Seong Lee</li>
                                <li>Jung Soo Choi</li>
                                <li>Yun Seon Lee</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col">
                            <h4>STUFF</h4>
                            <ul className="list-unstyled">
                                <li>ASDASD</li>
                                <li>ASDASD</li>
                                <li>ASDASDASD</li>
                            </ul>
                        </div>  

                  
                    </div>
                    <hr/>
                        
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} CHOCOLANDER | All right reserved | Terms Of Service | Privacy
                            </p>
                        </div>
                </div>
            </div>
        )
    }
}
export default Footer; 
