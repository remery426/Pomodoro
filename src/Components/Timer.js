import React from 'react';
import Button from './Button'
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, currentAction:"Work", pause:true, round:0, seconds: 25 * 60 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.resetTimer = this.resetTimer.bind(this)
  }

  secondsToTime(secs){

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
  componentWillMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.timer = setInterval(this.countDown, 1000);
  }

  displayTime(){
    var secZero = ""
    var minZero = ""
    if(this.state.time.s<10){
      var secZero = "0"
    }
    if(this.state.time.m<10){
      var minZero = "0"
    }
    return(minZero + (this.state.time.m).toString() + ":" + secZero + (this.state.time.s).toString())
  }
  //Enter accurate times later
  resetTimer(){
    if (this.state.currentAction == "Work"){
      if(this.state.round == 3){
        this.setState({
          seconds: 15*60,
          time:{
            "s":0,
            "m":15
          }
        })
      }
      else{
      this.setState({
        time:{
          "s":0,
          "m":3
        },
        seconds:3*60
      })
    }
    }
    else{
      this.setState({
        seconds: 60*25+1,
        time:{
          "s":0,
          "m":25
        }
      })
      if(this.state.round==3){
        this.setState({round: 0})

      }
      else{
        this.setState({
          round: this.state.round+=1
        })
      }
    }

  }
  changeMessage(){
        if (this.state.currentAction == "Work"){
            this.setState({
              currentAction: "Take a break"
            })
        }
        else{
          this.setState({
            currentAction: "Work"
          })
        }
  }
  renderButton(){
    if(this.state.pause == true){
      return <Button onClick={()=>{this.setState({pause:false})}} color="green" text="Start"/>
    }
    else{
      return <Button onClick={()=>{this.setState({pause:true})}} color = "red" text="Pause"/>
    }
  }
  countDown() {
    // Remove one second, set state so a re-render happens.
    if(this.state.pause == false){
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.

    if (seconds == 0){
      this.setState({
        pause:true
      })
      setTimeout(()=>{

      if(this.state.currentAction=="Take a break"){
        alert("Break's over!")
    }
      else{
        alert("Times up take a break!")
      }
      this.resetTimer();
      this.changeMessage();
    }, 1000)

    }
  }
}

  render(){
    return(
      <div>
        <h2>{this.state.currentAction}</h2>
        <h1>{this.displayTime()}</h1>
        {this.renderButton()}
      </div>
    );
  }
}
export default Timer
