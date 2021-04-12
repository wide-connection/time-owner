import React, { useState } from 'react';
import './Calendar.css';
import Modal from 'react-modal'

const eventContainer = [];
export let time = [];
export let timeString; 
let numOfTile = 1; 

const handleClick=(e)=> {
    let a = e.target.style.backgroundColor;
   
    if (a === "" || a === "white") {        
        e.target.style.transition = '0.8s'
        e.target.style.backgroundColor = '#CDCDCD';    
   
        eventContainer.push(e);
    } else {
        e.target.style.transition = '0.8s'
        e.target.style.backgroundColor = 'white';
        e.target.innerHTML = "";
        eventContainer.pop(e);
    }

}

export function handleCategoryHighlight(e) {
    let temp = e.target.style.backgroundColor;
    console.log(e.target.style.backgroundColor);
    for (let i = 0; i < eventContainer.length; i++) {
        switch(temp){
            case 'deepskyblue':
            eventContainer[i].target.style.backgroundColor = '#00bfff';
            break;
            case 'yellow':
            eventContainer[i].target.style.backgroundColor = '#ffff00';
            break
            case 'pink':
            eventContainer[i].target.style.backgroundColor = '#ffc0cb';
            break;
            case 'mediumspringgreen':
            eventContainer[i].target.style.backgroundColor = '#00fa9a';
            break;
            case  'lightcoral':
            eventContainer[i].target.style.backgroundColor = '#f08080'; 
            break;
            case 'lightgray':
            eventContainer[i].target.style.backgroundColor = '#d3d3d3';
            break;
            case 'gold':
            eventContainer[i].target.style.backgroundColor = '#ffd700';
            break;
            case 'plum':
            eventContainer[i].target.style.backgroundColor = '#dda0dd';                
            break;
        default:
            console.log('There was a error with background color');
        }
    }
}

export function changeTileColor(task, category) {
  
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
    let count = 0; 
   
    for (let j = 0; j < eventContainer.length; j++) {

        if (eventContainer[j].target.innerHTML === task) {
            count++; 
        }
    }


    time = (count * 10);
}


const Calendar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    let default_time_number = 9; 
    let converted_time_number = parseInt(timeString);
   

    const timeZone = [
        {
            title: `${timeString == null ? `${default_time_number}:00` : `${converted_time_number}:00`}`,            
        }, 
        {
            title: `${timeString == null ? `${default_time_number + 1}:00` : `${converted_time_number + 1}:00`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 2}:00` : `${converted_time_number + 2}:00`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 3}:00` : `${converted_time_number + 3}:00`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 4}:00` : `${converted_time_number + 4}:00`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 5}:00` : `${converted_time_number + 5 > 24 ? '' : converted_time_number + 5 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 6}:00` : `${converted_time_number + 6 > 24 ? '' : converted_time_number + 6 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 7}:00` : `${converted_time_number + 7 > 24 ? '' : converted_time_number + 7 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 8}:00` : `${converted_time_number + 8 > 24 ? '' : converted_time_number + 8 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 9}:00` : `${converted_time_number + 9 > 24 ? '' : converted_time_number + 9 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 10}:00` : `${converted_time_number + 10 > 24 ? '' : converted_time_number + 10 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 11}:00` : `${converted_time_number + 11 > 24 ? '' : converted_time_number + 11 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 12}:00` : `${converted_time_number + 12 > 24 ? '' : converted_time_number + 12 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 13}:00` : `${converted_time_number + 13 > 24 ? '' : converted_time_number + 13 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 14}:00` : `${converted_time_number + 14 > 24 ? '' : converted_time_number + 14 + ':00'}`}`
        },
        {
            title: `${timeString == null ? `${default_time_number + 15}:00` : `${converted_time_number + 15 > 24 ? '' : converted_time_number + 15 + ':00'}`}`
        },

    ];

    let result = 24 - parseInt(timeZone[0].title); 
    parseInt(timeZone[0].title) === 9 ? numOfTile = 96 : numOfTile = (result * 6) + 6;


    // below code is for calendar setting (modal popup)
    // This currently has an error (I should click twice to change value)
    const clickTime=(e)=> {
        const selected = document.querySelector(".selected");
        const optionsContainer = document.querySelector(".options-container");

        const optionsList = document.querySelectorAll(".option");
        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active"); 
        })

        optionsList.forEach(o => {
           o.addEventListener("click", ()=> {            
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            timeString = o.querySelector("label").innerHTML; 
           })
        });        
    }

    const submitTime=(e)=> {        
        setModalIsOpen(false);
    }
    const cleanTable=(e)=> {
        let flag = window.confirm("Are you sure you wish to delete this item?");
        if (flag) {
            for (let i = 0; i < eventContainer.length; i++) {        
                eventContainer[i].target.style.backgroundColor = 'white'; // clean all calendar 
                eventContainer[i].target.innerHTML = "";
            }
            setModalIsOpen(false);
        } 
    }

    const timeZoneButton = timeZone.map((time, index) => {        
       return  <div className="time-zone">{time.title}</div>
     });
  
        
    return (
        <div>
            <Modal
             className="custom-modal-style"
             isOpen={modalIsOpen} 
             shouldCloseOnOverlayClick={false} 
             onRequestClose={() => setModalIsOpen(false)}     
             >
                <h2 className="modal-header">
                Calendar setting
                <i class="fas fa-user-cog" id="modal-setting-icon"></i>
                </h2>
                <div>
                    <div className="time-container">
                        <h3>Change starting time</h3>

                        <div className="select-box">
                            <div className="options-container">
                                <div className="option" >                                                     
                                    <input type="radio" className="radio" id="twelve-am" name="time-category"/>
                                    <label for="times">00:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="one-am" name="time-category"/>
                                    <label for="times">1:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="two-am" name="time-category"/>
                                    <label for="times">2:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="three-am" name="time-category"/>
                                    <label for="times">3:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="four-am" name="time-category"/>
                                    <label for="times">4:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="five-am" name="time-category"/>
                                    <label for="times">5:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="six-am" name="time-category"/>
                                    <label for="times">6:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="seven-am" name="time-category"/>
                                    <label for="times">7:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eight-am" name="time-category"/>
                                    <label for="times">8:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="nine-am" name="time-category"/>
                                    <label for="times">9:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="ten-am" name="time-category"/>
                                    <label for="times">10:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eleven-am" name="time-category"/>
                                    <label for="times">11:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="twelve-pm" name="time-category"/>
                                    <label for="times">12:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="one-pm" name="time-category"/>
                                    <label for="times">13:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="two-pm" name="time-category"/>
                                    <label for="times">14:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="three-pm" name="time-category"/>
                                    <label for="times">15:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="four-pm" name="time-category"/>
                                    <label for="times">16:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="five-pm" name="time-category"/>
                                    <label for="times">17:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="six-pm" name="time-category"/>
                                    <label for="times">18:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="seven-pm" name="time-category"/>
                                    <label for="times">19:00</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eight-pm" name="time-category"/>
                                    <label for="times">20:00</label>
                                </div>                               
                            </div>
                            <div className="selected" onClick={clickTime}>
                                    Select new time
                            </div>                           
                        </div>
                        <div className="reset-calendar" onClick={cleanTable}>
                            Reset calendar
                        </div>
                    </div>
                    <div className="btn-submit-handler">
                        <input type="submit" value="Apply change" onClick={submitTime}/> 
                        <button id="btn-close-modal"onClick={() => setModalIsOpen(false)} >Close</button>
                    </div>
                </div>
            </Modal>            
            <div className="date-container">
                <div className="reset-btn-container">                   
                    <i class="fas fa-user-cog fa-lg" onClick={() => setModalIsOpen(true)}></i>
                </div>   
                 <div className="datetime">
                    <div className="date">
                    <i class="fas fa-arrow-left"></i>
                        <span id="today">2021-04-12</span>                       
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
            {  [...Array(numOfTile)].map((x, i) =>   <div className="flex-row-item" onClick={handleClick}></div>)}
                </div> 
            </div>
            
        </div>
       
    ) 
    
    
}

export default Calendar;