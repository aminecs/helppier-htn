import React from 'react';

//css
import './FilterMenu.css';

//components
import FilterInput from './filter_input/FilterInput';
import FilterTextInput from './filter_text_Input/FilterTextInput';

function FilterMenu(props) {
  return (
    <div className = "filterMenu">
        <FilterInput
            headerValue = "Task Type"
            placeholder = "Please select a Type"
            onChangeInput = {props.onChangeTaskType}/>
        <FilterTextInput
            headerValue = "Maximum Time"
            placeholder = "Your time commitment"
            onChangeInput = {props.onChangeTimeCommitment}/>
        <FilterTextInput
            headerValue = "Neighbourhood"
            placeholder = "Southwark, London"
            onChangeInput = {props.onChangeNeighbourhood}/>
        <div className = "mapViewBtnContainer">
          <div className = "mapViewBtn" onClick = {props.toggleCurrentView}>
            {props.currentViewIsMap ?
            "List View": 
            "Map View"}
          </div>
        </div>
    </div>
  );
}

export default FilterMenu;