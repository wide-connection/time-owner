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
function App() {
  return (

    <div className="page-container">
    <div className="content-wrap">
    <Header/>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: 15}}>
    <WorkBtn>Work</WorkBtn>
    <HealthBtn>Health</HealthBtn>
    <HobbyBtn>Hobby</HobbyBtn>
    <FamilyBtn>Family</FamilyBtn>
    <RoutineBtn>Routine</RoutineBtn>
    <FriendBtn>Friends</FriendBtn>
    <EducationBtn>Education</EducationBtn>
    <EntertainmentBtn>Entertainment</EntertainmentBtn>
    </div>
    
    <DayTable>

    </DayTable>
  
    </div>
    <Footer/>
    </div>


  );
}

export default App;
