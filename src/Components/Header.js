import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
  render(){
    return(
      <nav>
        <div className =" nav-wrapper" >
            <h1 className=" brand-logo">
              Pomodoro Timer
            </h1>
        </div>
      </nav>
    )
  }
}
export default Header
