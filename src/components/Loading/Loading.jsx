import React from 'react'
import RingLoader from "react-spinners/RingLoader";
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
                    top: "35%",
                    left: "34%"
                  }}/>
            <RingLoader
            color={"#4A90E2"} 
            css={override}      
            size={125} 
            /> 
        </div>
    )
}

export default Loading; 