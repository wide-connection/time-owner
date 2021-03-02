import React from 'react'
import './EducationBtn.css'

const STYLES = [
    'educationBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const EducationBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`educationBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}