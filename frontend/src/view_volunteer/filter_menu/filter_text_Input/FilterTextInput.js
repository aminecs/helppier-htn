import React from 'react';

//css
import './FilterTextInput.css';

//icons
import { MdLocationOn } from 'react-icons/md';

function FilterTextInput(props) {
    return(
        <div className = "filterInput">
            <div className = "filterInputHeader">{props.headerValue}</div>
            <div className = "filterInputContainer">
                <input
                    className = "filterTextInput"
                    placeholder = {props.placeholder}/>
                <MdLocationOn
                    className = "filterInputDownIcon"
                    size = {20}/>
            </div>
        </div>
    );
}

export default FilterTextInput;