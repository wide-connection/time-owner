import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";
import logo from '../Images/TimeOwner.png'

const override = `
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 57%;
  top: 31%;
`;



const Loading = () => {
  
    return (
        <div>
            <img src={logo} alt="logo" 
            style={{
                    width: "400px",
                    position: "absolute",
                    top: "31%",
                    left: "34%"
                  }}/>
            <ClockLoader
            color={"#4A90E2"} 
            css={override}      
            size={100} 
            /> 
        </div>
    )
}

export default Loading; 