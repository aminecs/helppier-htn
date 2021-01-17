import React, { useState } from 'react';

//css
import './VolunteerView.css';

//components
import FilterMenu from './filter_menu/FilterMenu';
import MainMenu from '../main_menu/MainMenu';
import MapView from './view_map/MapView';
import ListView from './view_list/ListView';
import ThankyouVolunteerView from './view_thankyou_volunteer/ThankyouVolunteerView';

function VolunteerView() {
  //inputs
  const [taskType, setTaskType] = useState(null);
  const [timeCommitment, setTimeCommitment] = useState(null);
  const [neighbourhood, setNeighbourhood] = useState(null);

  //view states
  const [isMap, toggleIsMap] = useState(true);
  const [isThankyou, toggleIsThankyou] = useState(false);

  //on change inputs
  function onChangeTaskType(value){
    setTaskType(value);
  }

  function onChangeTimeCommitment(value){
    setTimeCommitment(value);
  }

  function onChangeNeighbourhood(value){
    setNeighbourhood(value);
  }

  function toggleCurrentView(){
    toggleIsMap(!isMap);
  }

  console.log(taskType);
  console.log(timeCommitment);
  console.log(neighbourhood);
  

  return (
    <div className = "volunteerView">
      <MainMenu/>
      <FilterMenu
        onChangeTaskType = {onChangeTaskType}
        onChangeTimeCommitment = {onChangeTimeCommitment}
        onChangeNeighbourhood = {onChangeNeighbourhood}
        currentViewIsMap = {isMap}
        toggleCurrentView = {toggleCurrentView}/>
      {isMap ?
        <MapView/> :
        <ListView
          toggleIsThankyou = {toggleIsThankyou}/>}
      {isThankyou && 
        <ThankyouVolunteerView />}
    </div>
  );
}

export default VolunteerView;