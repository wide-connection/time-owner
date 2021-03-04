import React, { useState } from 'react';
import './Categories.css';
//import Draggable from "react-draggable";

const Categories = (props) => {
    const [color] = useState(props.color);
    const [content] = useState(props.content);
    const [className] = useState(props.className);

    return (
        // <Draggable>
        //     <div className={className}>
        //         <button style={{ backgroundColor: color }}></button>
        //         <span>{content}</span>
        //     </div>
        // </Draggable>
        <div className={className}>
            <button style={{ backgroundColor: color }}></button>
            <span>{content}</span>
        </div>
    )
}

export default Categories;