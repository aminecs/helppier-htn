import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import Cookies from 'js-cookie';

//css
import './RequestVolunteerView.css';

//icons
import { BsFillStarFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

//components
import MainMenu from '../main_menu/MainMenu';
import RequestTopContent from './RequestTopContent/RequestTopContent';
import FilterInput from '../view_volunteer/filter_menu/filter_input/FilterInput';
import RequestDescriptionTextInput from './RequestDescriptionTextInput/RequestDescriptionTextInput';
import SubmittedRequestView from './SubmittedRequestView/SubmittedRequestView';
import RequestTextInput from './RequestTextInput/RequestTextInput';
import { postRequest } from '../functions_global/request';

function RequestVolunteerView() {
  const [viewport, setViewport] = useState(null);
  const [displaySubmittedView, setDisplaySubmittedView] = useState(false);

  //inputs
  const [taskType, setTaskType] = useState(null);
  const [timeCommitment, setTimeCommitment] = useState(null);
  const [urgency, setUrgency] = useState(null);
  const [description, setDescription] = useState(null);

  //component did mount
  useEffect(() => {
    //user allow locaiton
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 11
        });
      });
    }
  }, []);

  function onChangeTaskType(value){
    setTaskType(value);
  }

  function onChangeTimeCommitment(value){
    setTimeCommitment(value);
  }

  function onChangeUrgency(value){
    setUrgency(value);
  }
  
  function onChangeDescription(value){
    setDescription(value);
  }

  function submit(){
    const data = {
      "owner_id": Cookies.get("userId"),
      description,
      "job_type": taskType,
      "reward": "100",
      "latitude": viewport.latitude,
      "longitude": viewport.longitude,
      "time_needed_mins": timeCommitment
    }
    var request = postRequest(data, "http://localhost:5000/api/job/create");
    fetch(request).then((response) => {
      response.json().then((data) => {
         setDisplaySubmittedView(true)
      });
    })
  }

  return (
    <div className = "requestVolunteerView">
      <MainMenu />
      {!displaySubmittedView ?
      <div className = "requestVolunteerViewContainer">
        <RequestTopContent />
        <div className = "requestVolunteerViewBody">
            <div className = "requestVolunteerViewLeft">
                <FilterInput
                    color = "blue"
                    headerValue = "Task Type"
                    placeholder = "Select task type"
                    onChangeInput = {onChangeTaskType}/>
                <RequestTextInput
                    headerValue = "Time Needed"
                    placeholder = "Time required from volunteer"
                    onChangeInput = {onChangeTimeCommitment}/>
                <RequestTextInput
                    headerValue = "Urgency"
                    placeholder = "How soon do you need to help by"
                    onChangeInput = {onChangeUrgency}/>
                <div className = "requestDescriptionTextInputContainer">
                  <RequestDescriptionTextInput
                      color = "blue"
                      headerValue = "Description"
                      placeholder = "Description of request"
                      onChangeInput = {onChangeDescription}/>
                </div>
                <div className = "requestVolunteerViewLeftFooter">
                  <div className = "requestVolunteerViewLeftFooterLeft">
                    <BsFillStarFill
                      color = "#90CAE4"/> &nbsp;
                    Estimate Rewards
                  </div>
                  <div className = "requestVolunteerViewLeftFooterRight">
                    Automatically calculated
                  </div>
                </div>
            </div>
            <div className = "requestVolunteerViewRight">
                <div className = "requestVolunteerViewRightHeader">
                  <div className = "requestVolunteerViewRightHeaderTitle">Request Area</div>
                  <div className = "requestVolunteerViewRightHeaderDescription">
                    <MdLocationOn color="#90CAE4" size={20}/> Based on current location
                  </div>
                </div>
                <div className = "requestVolunteerMap">
                  <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle='mapbox://styles/mapbox/outdoors-v10?optimize=true'
                    mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_API_KEY}
                    onViewportChange={nextViewport => setViewport(nextViewport)}>
                  </ReactMapGL>
                </div>
            </div>
        </div>
        <div className = "requestVolunteerViewFooter">
          <div className = "requestVolunteerSubmitBtn" onClick = {submit}>Submit</div>
        </div>
      </div> : 
      <SubmittedRequestView />}
    </div>
  );
}

export default RequestVolunteerView;