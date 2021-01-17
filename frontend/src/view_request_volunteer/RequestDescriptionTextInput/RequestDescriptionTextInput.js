import React from 'react';

//css
import './RequestDescriptionTextInput.css';

function RequestDescriptionTextInput(props) {
    return(
        <div className = "filterInput">
            <div className = "filterInputHeader">{props.headerValue}</div>
            <div className = "filterInputContainerDescription">
                <textarea
                    className = "filterTextInputDescription"
                    placeholder = {props.placeholder}/>
            </div>
        </div>
    );
}

export default RequestDescriptionTextInput;