import React from 'react';

//css
import './FilterMenu.css';

//components
import FilterInput from './filter_input/FilterInput';

function FilterMenu(props) {
  return (
    <div className = "filterMenu">
        <FilterInput
            headerValue = "Task Type"
            placeholder = "Dog walking, grocery run..."
            icon = {"icon down"}
            onChangeInput = {props.onChangeTaskType}/>
        <FilterInput
            headerValue = "Time Needed"
            icon = {"icon down"}
            placeholder = "Your time commitment"
            onChangeInput = {props.onChangeTimeCommitment}/>
        <FilterInput
            headerValue = "Neighbourhood"
            icon = {"location Icon"}
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