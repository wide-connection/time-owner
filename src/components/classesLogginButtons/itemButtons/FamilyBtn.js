import React from 'react'
import './FamilyBtn.css'

const STYLES = [
    'familyBtn'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const FamilyBtn = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
       <button className={`familyBtn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
       type={type}>
           {children}
       </button>
    )
}