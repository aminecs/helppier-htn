import React, {useEffect, useState} from 'react';

//css
import './TaskDescriptionCard.css';

//mock data
import mock_task_data from '../../../mock_task_data.json';

function TaskDescriptionCard(props) {
  const [taskInfo, setTaskInfo] = useState(null);

  useEffect(() => {
    const task = mock_task_data.find(task => task._id === props.id);
    console.log(task);
    setTaskInfo(task);
  }, [props.id]);

  if(taskInfo){
    return (
      <div className = "taskDescriptionCard">
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Name</div>
          <div className = "taskDescriptionCardValue">{taskInfo.name}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Task Type</div>
          <div className = "taskDescriptionCardValue">{taskInfo.type}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Time</div>
          <div className = "taskDescriptionCardValue">{taskInfo.time}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Distance</div>
          <div className = "taskDescriptionCardValue">{taskInfo.latitude  + " " + taskInfo.longitude}</div>
        </div>
        <div className = "taskDescriptionCardContainer">
          <div className = "taskDescriptionCardHeader">Rewards</div>
          <div className = "taskDescriptionCardValue">{taskInfo.rewards} points</div>
        </div>
        <div className = "taskDescriptionCardContainerDescription">
          <div className = "taskDescriptionCardHeader">Description</div>
          <div className = "taskDescriptionCardValueDescription">{taskInfo.description}</div>
        </div>
        <div className = "taskDescriptionCardButtonContainer">
          <div className = "taskDescriptionCardBackBtn">Back</div>
          <div className = "taskDescriptionCardVolunteerBtn">Volunteer</div>
        </div>
      </div>
    );
  }
  else{
    return null;
  }
}

export default TaskDescriptionCard;