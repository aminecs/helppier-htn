import React from 'react';

//css
import './RequestTextInput.css';

function RequestTextInput(props) {
  return (
    <div className = "filterInput">
        <div className = "filterInputHeader">{props.headerValue}</div>
        <div className = "requestTextInputContainer">
            <input
                className = "requestTextInputBlue"
                placeholder = {props.placeholder}
                onChange = {e => props.onChangeInput(e.target.value)}/>
        </div>
    </div>
  );
}

export default RequestTextInput;