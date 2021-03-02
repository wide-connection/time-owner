import React from 'react'
import './WorkBtn.css'

const STYLES = [
    'workBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const WorkBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`workBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}