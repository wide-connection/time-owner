import './Timer.scss';
import React from 'react';

export class Timer extends React.Component {

  timerPaused = false
 // timerStoped = true;
 timerPaused1 = false

  constructor() {
    super();
    this.state = { time: {}, seconds: 1, time1:{}, seconds1: 1 };
    this.timer = 0;
    this.timer1 = 0;
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.countNumber = this.countNumber.bind(this);
    // this.stopTimer = this.stopTimer.bind(this);

  }
  
  secondsToTime(secs) {
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




  pauseTimer() {
    clearInterval(this.timer)
  this.timerPaused = false; 
 }



  startTimer() {
     this.timerPaused=true;

    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countNumber, 1000);
    }
    // this.timerPaused = false;
    console.log(this.timer);
    return this.timer;

  }



  // stopTimer() {
  //  clearInterval(this.timer);
  //   this.timerStopped = true;
  //   this.startTimer();
  // }


  countNumber() {
    this.timerPaused=true;
    let seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }



  render() {
    return (<div>

      <div className="timer-proc">
        <button className='btn-timer' onClick={!this.timerPaused ? this.startTimer :  this.pauseTimer  }>
          Procrastinating h: {this.state.time.h}   m: {this.state.time.m} s: {this.state.time.s}
        </button>
      </div>

    </div>);
  };
}

export default Timer;