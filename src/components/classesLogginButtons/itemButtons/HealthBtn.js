import React from 'react'
import './HealthBtn.css'

const STYLES = [
    'healthBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const HealthBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`healthBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}