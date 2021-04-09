import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import Calendar from './components/calendar/Calendar'
import TableForms from './components/TableForm/TableForms'
import Categories from './components/Categories/Categories';
import Timer from './components/Timer/Timer'
import TimerProc from './components/Timer/TimerProc'
import About from './components/About/About'
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
              <Route path="/about" component={About}/>
                <Route path="/">
                  <div className="right-half">       
                    <div className="calendar-container">
                      <Calendar />
                    </div>
                   {/* ON HOLD 
                      <Timer/>
                      <TimerProc /> 
                         ON HOLD */}
                  </div>

                  <br />
                  <div className="left-half">
                    {/* <div className="WeeklyGoals-container">
                      <WeeklyGoalsList />
                    </div> */}
                    
                    <div className="table-container">
                      <TableForms />
                    </div>
                   
                  </div>
                </Route>

                <Route path="/login">

                </Route>
                
                      

                <Route path="/contact">

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
