import React, { useState } from 'react';
import './Categories.css';
import { handleCategoryHighlight } from '../../components/calendar/Calendar'; 

export function handleCategoryClick(e) {
    handleCategoryHighlight(e); 
}

const Categories = (props) => {
    const [color] = useState(props.color);
    const [content] = useState(props.content);
    const [className] = useState(props.className);

   //my function to add should be defined here 


   const categs = [
    {
        className: 'Work-btn',
        color: 'deepSkyBlue',
        content: 'Work'
    },
    {
        className: 'Family-btn',
        color: 'yellow',
        content: 'Family'
    },
    {
        className: 'Work-btn',
        color: 'blue',
        content: 'Work'
    },
    {
        className: 'Education-btn',
        color: 'mediumSpringGreen',
        content: 'Education'
    },
    {
        className: 'Entertainment-btn',
        color: 'lightCoral',
        content: 'Entertainment'
    },
    {
        className: 'Routine-btn',
        color: 'lightGray',
        content: 'Eoutine'
    },
    {
        className: 'Friends-btn',
        color: 'pink',
        content: 'Friends'
    },
    {
        className: 'Health-btn',
        color: 'gold',
        content: 'Health'
    },
    {
        className: 'Hobby-btn',
        color: 'plum',
        content: 'Hobby'
    },

];

const categArray = categs.map((className, color, content, index) => {        
//<Categories className="Routine-btn" color='lightGray' content='Routine' />
    //return  <div className="time-zone">{time.title}</div>
    return <div className={className}>
        <button className="btn" onClick={handleCategoryClick} style={{ backgroundColor: color }}></button>
        <span>{content}</span>
    </div>  
    
    
  });



    return (
        <div className="category_container">
            {categArray}
            {/* <div className={className}>
                
                <button className="btn" onClick={handleCategoryClick} style={{ backgroundColor: color }}></button>
                <span>{content}</span>
            </div> */}
            {/* add new button for user here */}
        </div>
        // click category button and it will color the tile

    )
}

export default Categories;