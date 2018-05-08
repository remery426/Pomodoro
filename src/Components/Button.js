import React from 'react'
import ReactDOM from 'react-dom'
const Button = (props)=>{
  return(
    <a className="waves-effect waves-light btn"
    onClick={props.onClick}
    style={{backgroundColor:props.color}}
    >{props.text}</a>
)
}
export default Button
