import React, { useState } from 'react';
import './Calendar.css';
import Modal from 'react-modal'
import { SelectAllRounded } from '@material-ui/icons';


const eventContainer = [];
export let time = [];
export let timeString; 
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

export function cleanTable() {
    
}
const Calendar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

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
            title: '13:00'
        },
        {
            title: '14:00'
        },
        {
            title: '15:00'
        },
        {
            title: '16:00'
        },
        {
            title: '17:00'
        },
        {
            title: '18:00'
        },
        {
            title: '19:00'
        },
        {
            title: '20:00'
        },
        {
            title: '21:00'
        },
        {
            title: '22:00'
        },
        {
            title: '23:00'
        },
        {
            title: '24:00'
        },
    ];


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
        
        console.log(timeString);
        setModalIsOpen(false);
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
                                    <label for="times">12:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="one-am" name="time-category"/>
                                    <label for="times">1:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="two-am" name="time-category"/>
                                    <label for="times">2:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="three-am" name="time-category"/>
                                    <label for="times">3:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="four-am" name="time-category"/>
                                    <label for="times">4:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="five-am" name="time-category"/>
                                    <label for="times">5:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="six-am" name="time-category"/>
                                    <label for="times">6:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="seven-am" name="time-category"/>
                                    <label for="times">7:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eight-am" name="time-category"/>
                                    <label for="times">8:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="nine-am" name="time-category"/>
                                    <label for="times">9:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="ten-am" name="time-category"/>
                                    <label for="times">10:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eleven-am" name="time-category"/>
                                    <label for="times">11:00 AM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="twelve-pm" name="time-category"/>
                                    <label for="times">12:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="one-pm" name="time-category"/>
                                    <label for="times">1:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="two-pm" name="time-category"/>
                                    <label for="times">2:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="three-pm" name="time-category"/>
                                    <label for="times">3:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="four-pm" name="time-category"/>
                                    <label for="times">4:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="five-pm" name="time-category"/>
                                    <label for="times">5:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="six-pm" name="time-category"/>
                                    <label for="times">6:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="seven-pm" name="time-category"/>
                                    <label for="times">7:00 PM</label>
                                </div>
                                <div className="option" >
                                    <input type="radio" className="radio" id="eight-pm" name="time-category"/>
                                    <label for="times">8:00 PM</label>
                                </div>                               
                            </div>
                            <div className="selected" onClick={clickTime}>
                                    Select new time
                            </div>                           
                        </div>
                        <div className="reset-calendar">
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
            {  [...Array(138)].map((x, i) =>   <div className="flex-row-item" onClick={handleClick}></div>)}
                </div> 
            </div>
            
        </div>
       
    ) 
    
    
}

export default Calendar;