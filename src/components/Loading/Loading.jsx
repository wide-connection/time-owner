import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";
import logo from '../Images/Chocolander.png'

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
                    top: "33.5%",
                    left: "34%"
                  }}/>
            <ClockLoader
            color={"#3650D7"} 
            css={override}      
            size={125} 
            /> 
        </div>
    )
}

export default Loading; 