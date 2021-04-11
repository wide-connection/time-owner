import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Calender from './components/calender/Calender';
import TableForms from './components/TableForm/TableForms';
//import WeeklyGoalsList from './components/WeeklyGoals/WeeklyGoalsList';

import Categories from './components/Categories/Categories';
import Timer from './components/Timer/Timer';
import TimerProc from './components/Timer/TimerProc';
import About from './components/About/About';
import Statistics from './components/Statistics/Statistics';
import Login from './components/Login/Login';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  });
  return (
    <Router>
      <div className="App">
//<<<<<<< Yunseon_loginpage
//         {isLoading ? (
//           <Loading />
//         ) : (
//           <div>
//             <Header />
//             <Switch>
//               <Route path="/about" component={About} />
//               <Route path="/statistics" component={Statistics} />
//               <Route path="/login" component={Login} />
//=======
        {
          isLoading ?
            <Loading />
            :
            <div>
              <Header />
              <Switch>
              <Route path="/login" component={Login} />
              <Route path="/about" component={About}/>
              <Route path="/statistics" component={Statistics}/>
              
                <Route path="/">
                  <div className="right-half">       
                    <div className="calender-container">
                      <Calender />
                    </div>

                   {/* ON HOLD 
                      <Timer/>
                      <TimerProc /> 
                         ON HOLD */}
// >>>>>>> main

              <Route path="/">
                <div className="right-half">
                  <div className="calender-container">
                    <Calender />
                  </div>

// <<<<<<< Yunseon_loginpage
//                   <Timer />
//                   <TimerProc />
//                 </div>

//                 <br />
//                 <div className="left-half">
//                   <div className="WeeklyGoals-container">
//                     <WeeklyGoalsList />
// =======
                  <br />
                  <div className="left-half">
                    {/* <div className="WeeklyGoals-container">
                      <WeeklyGoalsList />
                    </div> */}
                    
                    <div className="table-container">
                      <TableForms />
                    </div>
                   
//>>>>>>> main
                  </div>
                  <div className="timer-container"></div>
                  <div className="table-container">
                    <TableForms />
                  </div>
                  <div className="buttons-container">
                    <Categories
                      className="Work-btn"
                      color="deepSkyBlue"
                      content="Work"
                    />
                    <Categories
                      className="Family-btn"
                      color="yellow"
                      content="Family"
                    />
                    <Categories
                      className="Education-btn"
                      color="mediumSpringGreen"
                      content="Education"
                    />
                    <Categories
                      className="Entertainment-btn"
                      color="lightCoral"
                      content="Entertainment"
                    />
                    <Categories
                      className="Routine-btn"
                      color="lightGray"
                      content="Routine"
                    />
                    <Categories
                      className="Friends-btn"
                      color="pink"
                      content="Friends"
                    />
                    <Categories
                      className="Health-btn"
                      color="gold"
                      content="Health"
                    />
                    <Categories
                      className="Hobby-btn"
                      color="plum"
                      content="Hobby"
                    />
                  </div>
                </div>
              </Route>

              <Route path="/contact"></Route>
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
