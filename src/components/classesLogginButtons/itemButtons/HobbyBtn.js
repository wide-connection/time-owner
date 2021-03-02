import React from 'react'
import './HobbyBtn.css';

const STYLES = [
    'hobbyBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const HobbyBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`hobbyBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}