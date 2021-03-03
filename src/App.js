import React from 'react';
import './App.css';
import { HealthBtn } from './components/classesLogginButtons/itemButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/itemButtons/WorkBtn';
import { HobbyBtn } from './components/classesLogginButtons/itemButtons/HobbyBtn'
import { FamilyBtn } from './components/classesLogginButtons/itemButtons/FamilyBtn'
import { RoutineBtn } from './components/classesLogginButtons/itemButtons/RoutineBtn'
import { FriendBtn } from './components/classesLogginButtons/itemButtons/FriendBtn'
import { EducationBtn } from './components/classesLogginButtons/itemButtons/EducationBtn'
import { EntertainmentBtn } from './components/classesLogginButtons/itemButtons/EntertainmentBtn'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import DayTable from './components/Tables/DayTable'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />

        <DayTable>

        </DayTable>

        <div className="buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 15 }}>
          {/* <WorkBtn>Work</WorkBtn>
          <HealthBtn>Health</HealthBtn>
          <HobbyBtn>Hobby</HobbyBtn>
          <FamilyBtn>Family</FamilyBtn>
          <RoutineBtn>Routine</RoutineBtn>
          <FriendBtn>Friends</FriendBtn>
          <EducationBtn>Education</EducationBtn>
          <EntertainmentBtn>Entertainment</EntertainmentBtn> */}
          <WorkBtn /> <span>Work</span> 
          <HealthBtn /> <span>Health</span>
          <HobbyBtn /> <span>Hobby</span>
          <FamilyBtn /> <span>Family</span>
          <RoutineBtn /> <span>Routine</span>
          <FriendBtn /> <span>Friends</span>
          <EducationBtn /> <span>Education</span>
          <EntertainmentBtn /> <span>Entertainment</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
