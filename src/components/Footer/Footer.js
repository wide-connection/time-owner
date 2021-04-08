import React, { Component } from 'react';
import './Footer.scss'
import Categories from '../Categories/Categories';

class Footer extends Component {
    render() {
        return (
        <div className="App">
            <div className="page-content">
              
            </div>

            <footer>
                <div>
                    <div className="left-col">
                    <div className='buttons-container'>
                      <Categories className="Work-btn" color='deepSkyBlue' content='Work' />
                      <Categories className="Family-btn" color='yellow' content='Family' />
                      <Categories className="Education-btn" color='mediumSpringGreen' content='Education' />
                      <Categories className="Entertainment-btn" color='lightCoral' content='Entertainment' />
                      <Categories className="Routine-btn" color='lightGray' content='Routine' />
                      <Categories className="Friends-btn" color='pink' content='Friends' />
                      <Categories className="Health-btn" color='gold' content='Health' />
                      <Categories className="Hobby-btn" color='plum' content='Hobby' />
                    </div>                 
                    </div>
                </div>
            </footer>
        </div>
        )
    }
}
export default Footer; 
