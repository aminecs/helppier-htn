import React from 'react';

//css
import './FilterInput.css';

//icons
import { BiCaretDown } from 'react-icons/bi';

function FilterInput(props) {
    return(
        <div className = "filterInput">
            <div className = "filterInputHeader">{props.headerValue}</div>
            <div className = {props.color=== "blue" ? "filterInputContainer blue" :"filterInputContainer"}>
                <select className="select" onChange = {e => props.onChangeInput(e.target.value)}>
                    <option disabled selected value> {props.placeholder} </option>
                    <option value="delivery">Delivery</option>
                    <option value="tutoring">Tutoring</option>
                    <option value="dogwalking">Dog Walking</option>
                    <option value="cakebaking">Cake Baking</option>
                    <option value="groceries">Groceries</option>
                    <option value="transportation">Transportation</option>
                </select>
                <BiCaretDown
                    className = {props.color === "blue" ? "filterInputDownIcon colorBlue" : "filterInputDownIcon"}
                    size = {20}/>
            </div>
        </div>
    );
}

export default FilterInput;