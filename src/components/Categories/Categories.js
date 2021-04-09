import React, { useState } from 'react';
import './Categories.css';
import { handleCategoryHighlight } from '../calendar/Calendar'; 

export function handleCategoryClick(e) {
    handleCategoryHighlight(e); 
}

const Categories = (props) => {
    const [color] = useState(props.color);
    const [content] = useState(props.content);
    const [className] = useState(props.className);

    
    return (
        <div className="category_container">
            <div className={className}>
                <button className="btn" onClick={handleCategoryClick} style={{ backgroundColor: color }}></button>
                <span>{content}</span>
            </div>
        </div>
        // click category button and it will color the tile

    )
}

export default Categories;