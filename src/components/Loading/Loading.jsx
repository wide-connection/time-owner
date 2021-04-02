import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";
import logo from '../Footer/Images/Logo_transparent.png'

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
                    width: "350px",
                    position: "absolute",
                    top: "29.5%",
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