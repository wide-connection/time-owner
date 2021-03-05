import './Timer.scss';
import React from 'react';




export class Timer extends React.Component {

    constructor() {
        super();
        this.state = { time: {}, seconds: 1 };
        this.timer = 0;
        this.timer2 = 0;
        this.startTimer = this.startTimer.bind(this);
        this.startTimer2 = this.startTimer2.bind(this);
        this.countNumber = this.countNumber.bind(this);
      }
    
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countNumber, 1000);
        }
      }

      startTimer2() {
        if (this.timer2 === 0 && this.state.seconds > 0) {
          this.timer2 = setInterval(this.countNumber, 1000);
        }
      }
    
      countNumber() {
    
        let seconds = this.state.seconds + 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        if (seconds === 0) { 
          clearInterval(this.timer);
        }
      }
 

render() {return(<div>
    <div  className="container-button-timer ">
<button className='btn-timer' onClick= {this.startTimer} >
Productive h: {this.state.time.h}   m: {this.state.time.m} s: {this.state.time.s}
</button >
<button className='btn-timer'  onClick= {this.startTimer2} >
Procrastinating h: {this.state.time.h}   m: {this.state.time.m} s: {this.state.time.s}
</button>
</div>
</div>);
};
}

export default Timer; 