import React from 'react'
import './EntertainmentBtn.css'

const STYLES = [
    'entertainmentBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const EntertainmentBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`entertainmentBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}