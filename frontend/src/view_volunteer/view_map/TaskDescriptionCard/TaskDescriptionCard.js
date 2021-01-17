import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';

//css
import './TaskDescriptionCard.css';

import { postRequest } from '../../../functions_global/request';

function TaskDescriptionCard(props) {
  const [taskInfo, setTaskInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/job/" + props.id).then((response => response.json()))
      .then((data) => {
        setTaskInfo(data);
      }).catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  function volunteer(){
    const data = {"user_id": Cookies.get("userId")};
    var request = postRequest(data, "http://localhost:5000/api/job/" + taskInfo.id);
    fetch(request).then((response) => {
      response.json().then((data) => {
        if(data){
          props.toggleIsThankyou(true);
        }
      });
    });
  }

  if(taskInfo){
    return (
      <div className = "taskDescriptionCard">
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Name</div>
          <div className = "taskDescriptionCardValue">{taskInfo.owner_id}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Task Type</div>
          <div className = "taskDescriptionCardValue">{taskInfo.job_type}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Time</div>
          <div className = "taskDescriptionCardValue">{taskInfo.time_needed_mins}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Distance</div>
          <div className = "taskDescriptionCardValue">{taskInfo.latitude  + " " + taskInfo.longitude}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Rewards</div>
          <div className = "taskDescriptionCardValue">{taskInfo.reward} points</div>
        </div>
        <div className = "taskDescriptionCardContainerDescription">
          <div className = "taskDescriptionCardHeader">Description</div>
          <div className = "taskDescriptionCardValueDescription">{taskInfo.description}</div>
        </div>
        <div className = "taskDescriptionCardButtonContainer">
          <div className = "taskDescriptionCardBackBtn" onClick = {() => props.setTaskDescriptionCardId(null)}>Back</div>
          <div className = "taskDescriptionCardVolunteerBtn" onClick = {volunteer}>Volunteer</div>
        </div>
      </div>
    );
  }
  else{
    return null;
  }
}

export default TaskDescriptionCard;