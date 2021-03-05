import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import Calender from './components/calender/Calender'
import Categories from './components/Categories/Categories'
import TableForms from './components/TableForm/TableForms'
import Timer from './components/Timer/Timer'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  })
  return (
    <Router>
      <div className="App">
        {
          isLoading ?
            <Loading />
            :
            <div>
              <Header />
              <Switch>
                <Route path="/">
                  <div className="calender-container">
                    <Calender />
                  </div>

                  <br />
                  <div className="left-half">
                    <div className="table-container">
                      <TableForms />
                    <div className='buttons-container'>
                    </div>
                    <Timer/> 
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
                </Route>

                <Route path="login">

                </Route>
                <Route path="about">

                </Route>

                <Route path="contact">

                </Route>
              </Switch>
              <Footer />
            </div>
        }
      </div>
    </Router>


  );
}

export default App;
