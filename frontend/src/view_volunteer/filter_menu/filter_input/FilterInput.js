import React from 'react';

//css
import './FilterInput.css';

//icons
import { BiCaretDown } from 'react-icons/bi';

function FilterInput(props) {
    return(
        <div className = "filterInput">
            <div className = "filterInputHeader">{props.headerValue}</div>
            <div className = "filterInputContainer">
                <select value = {null}>
                    <option disabled selected value> {props.placeholder} </option>
                    <option value="0">Ehne mehne Muh</option>
                    <option value="1">Test</option>
                    <option value="2">Test 2</option>
                </select>
                <BiCaretDown
                    className = "filterInputDownIcon"
                    size = {20}/>
            </div>
        </div>
    );
}

export default FilterInput;