import React from 'react';

//css
import './FilterTextInput.css';

//icons
import { MdLocationOn } from 'react-icons/md';

function FilterTextInput(props) {
    return(
        <div className = "filterInput">
            <div className = "filterInputHeader">{props.headerValue}</div>
            <div className = {props.color=== "blue" ? "filterInputContainer blue" :"filterInputContainer"}>
                <input
                    className = {props.color === "blue" ? "filterTextInputBlue" : "filterTextInput"}
                    placeholder = {props.placeholder}
                    onChange = {e => props.onChangeInput(e.target.value)}/>
                <MdLocationOn
                    className = "filterInputDownIcon"
                    size = {20}/>
            </div>
        </div>
    );
}

export default FilterTextInput;