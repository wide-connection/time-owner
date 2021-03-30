import React, { useState } from 'react';
import './Categories.css';

const Categories = (props) => {
    const [color] = useState(props.color);
    const [content] = useState(props.content);
    const [className] = useState(props.className);

    return (
        <div className={className}>
            <button className="btn" style={{ backgroundColor: color }}></button>
            <span>{content}</span>
        </div>
    )
}

export default Categories;