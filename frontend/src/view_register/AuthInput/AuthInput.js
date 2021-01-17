import React from 'react';
import './AuthInput.css';

function AuthInput(props) {
  return (
      <div className = "authInput">
        <div className = "authInputHeader">{props.header}</div>
        <input
            className = "authInputInput"
            placeholder = {props.placeholder}
            value = {props.value}
            type = {props.password && "password"}
            onChange = {e => props.onChange(e.target.value)}/>
    </div>
  );
}

export default AuthInput;