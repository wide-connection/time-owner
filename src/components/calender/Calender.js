import React from 'react';
import './Calender.css';

export const divArr=[];
export const eventContainer=[]; 
export let time = []; 

export function handleClick(e) {
    let a = e.target.style.backgroundColor; 

    if (a === "" || a === "white") {
        e.target.style.backgroundColor = '#CDCDCD';
        eventContainer.push(e);
    } else {
        e.target.style.backgroundColor = 'white';
        e.target.innerHTML = "";
        eventContainer.pop(e);
    }     
        
}

export function handleCategoryHighlight(e) {
    let temp = e.target.style.backgroundColor; 
    console.log(e.target.style.backgroundColor);
    for (let i = 0; i < eventContainer.length; i++) {
        if (temp === 'deepskyblue') {
            eventContainer[i].target.style.backgroundColor = '#00bfff';
        }
        else if (temp === 'pink') {
            eventContainer[i].target.style.backgroundColor = '#ffc0cb';
        } 
        else if (temp === 'mediumspringgreen') {
            eventContainer[i].target.style.backgroundColor = '#00fa9a';  
        }
        else if (temp === 'lightcoral') {
            eventContainer[i].target.style.backgroundColor = '#f08080';
        }
    }
}

export function changeTileColor(task, category) {
    let prev = time;
    let count = 0; 
    console.log(prev); 
    for (let i = 0; i < eventContainer.length; i++) {
         
        let temp = eventContainer[i].target.style.backgroundColor;
        if(category === "Work" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#00bfff';
            eventContainer[i].target.innerHTML = task;
        }
        else if (category === "Family" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#ffff00';
            eventContainer[i].target.innerHTML = task;
        }
        else if(category === "Education" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#00fa9a';        
            eventContainer[i].target.innerHTML = task;
        } 
        else if (category === "Entertainment" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#f08080';
            eventContainer[i].target.innerHTML = task;
        }
        else if (category === "Routine" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#d3d3d3';
            eventContainer[i].target.innerHTML = task;
        }
        else if (category === "Friends" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#ffc0cb';
            eventContainer[i].target.innerHTML = task;
        }
        else if (category === "Health" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#ffd700';
            eventContainer[i].target.innerHTML = task;
        }
        else if (category === "Hobby" && temp === "rgb(205, 205, 205)") {
            eventContainer[i].target.style.backgroundColor = '#dda0dd';
            eventContainer[i].target.innerHTML = task;
            // css to assign middle 
            // mark complete user non-automatic change 
            // time sound 
            // when the user clicks specific category, it will display some proper imojis     
            // the format of time hh:mm 
        }
      
    }
    if (count == 0) {
        time = (eventContainer.length * 10);
    } else {
        time = (eventContainer.length * 10) - prev; 
    }
    count++; 
} 

const Calender = () => {

    return (
        <div className="calender">     
            <div className="time-stamp">
                
                <div className="time-zone">9:00</div>
                <div className="time-zone">10:00</div>
                <div className="time-zone">11:00</div>
                <div className="time-zone">12:00</div>
                <div className="time-zone">13:00</div>
                <div className="time-zone">14:00</div>
                <div className="time-zone">15:00</div>
                <div className="time-zone">16:00</div>
                <div className="time-zone">17:00</div>
                <div className="time-zone">18:00</div>
                <div className="time-zone">19:00</div>
                <div className="time-zone">20:00</div>
                <div className="time-zone">21:00</div>
                <div className="time-zone">22:00</div>
                <div className="time-zone">23:00</div>
            </div>
            {/* <hr style={{position: 'absolute', top: '15.1%', right: '34.3%', border: '1px dotted black', width: '80px' }}/>
            <hr style={{position: 'absolute', top: '106.5%', right: '34.3%', border: '1px dotted black', width: '80px' }}/> */}
            <div className="vertical"></div>            
              <div class="flex-row-container">                 
                <div className="flex-row-item" id="non-flex-item"  onClick={handleClick}>9:00</div>
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