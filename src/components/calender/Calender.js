import React from 'react';
import './Calender.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Calender = () => {
    function handleClick(e) {
      let a = e.target.style.backgroundColor; 
      if (a == "" || a == "white") {
          e.target.style.backgroundColor = '#CDCDCD';
      } else {
          e.target.style.backgroundColor = 'white';
      }     
    }
  
    return (
        <div className="calender">
            <div className="vertical"></div>

              <div class="flex-row-container">
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>

                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>
                  <div className="flex-row-item" onClick={handleClick}></div>         
              </div>
              {/* <div className="square"></div>         */}
                    
        </div>
    )
}

export default Calender;