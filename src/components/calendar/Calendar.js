import React from 'react';
import './Calendar.css';

const eventContainer = [];
export let time = [];

const handleClick=(e)=> {
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
    for (let i = 0; i < eventContainer.length; i++) {
        switch(temp){
            case 'deepskyblue':
            eventContainer[i].target.style.backgroundColor = '#00bfff';
            break;
            case 'pink':
            eventContainer[i].target.style.backgroundColor = '#ffc0cb';
            break;
            case 'mediumspringgreen':
            eventContainer[i].target.style.backgroundColor = '#00fa9a';
            break;
            case  'lightcoral':
            eventContainer[i].target.style.backgroundColor = '#f08080'; 
            break;
        default:
            console.log('There was a error with background color');
        }
    }
}

export function changeTileColor(task, category) {
    let prev = time;
    let count = 0;
    console.log(prev);
    const colorBlox = "rgb(205, 205, 205)";
    for (let i = 0; i < eventContainer.length; i++) {

        let temp = eventContainer[i].target.style.backgroundColor;
        if(temp === colorBlox){
            switch(category){
                case "Work":
                    eventContainer[i].target.style.backgroundColor = '#00bfff';
                    eventContainer[i].target.innerHTML = task;   
                break;
                case "Family":
                    eventContainer[i].target.style.backgroundColor = '#ffff00';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Education":
                    eventContainer[i].target.style.backgroundColor = '#00fa9a';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Entertainment":
                    eventContainer[i].target.style.backgroundColor = '#f08080';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Routine":
                    eventContainer[i].target.style.backgroundColor = '#d3d3d3';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Friends":
                    eventContainer[i].target.style.backgroundColor = '#ffc0cb';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Health":
                    eventContainer[i].target.style.backgroundColor = '#ffd700';
                    eventContainer[i].target.innerHTML = task;
                break;
                case "Hobby":
                    eventContainer[i].target.style.backgroundColor = '#dda0dd';
                    eventContainer[i].target.innerHTML = task;
                break;
            default:
                console.log('There were errors with category and temp variables');
            }
        }         
    }
     (count === 0) ? time = (eventContainer.length * 10): time = (eventContainer.length * 10) - prev;
     count++;
}

const Calendar = () => {

    const timeZone = [
        {
            title: '9:00'
        },
        {
            title: '10:00'
        },
        {
            title: '11:00'
        },
        {
            title: '12:00'
        },
        {
            title: '9:00'
        },
        {
            title: '10:00'
        },
        {
            title: '11:00'
        },
        {
            title: '12:00'
        },
        {
            title: '9:00'
        },
        {
            title: '10:00'
        },
        {
            title: '11:00'
        },
        {
            title: '12:00'
        },
        {
            title: '9:00'
        },
        {
            title: '10:00'
        },
        {
            title: '11:00'
        },
        {
            title: '12:00'
        },
    ];

    let now = new Date();
    let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();
    
    // let today = document.getElementById("#today");
    // console.log(today);
    // today.innerText = `ssdass`;
    

    const timeZoneButton = timeZone.map((time, index) => {        

       return  <div className="time-zone">{time.title}</div>
     });
  
        
    return (
        <div>
            <div className="date-container">
                <div className="datetime">
                    <div className="date">
                    <i class="fas fa-arrow-left"></i>
                        <span id="today" ></span>
                    <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="calendar">
                <div className="time-stamp">
                {timeZoneButton}
                </div>
                <div className="vertical"></div>
                <div class="flex-row-container">
            {  [...Array(138)].map((x, i) =>   <div className="flex-row-item" onClick={handleClick}></div>)}
                </div> 
            </div>
        </div>
    ) 
    
    
}

export default Calendar;