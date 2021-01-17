import React, { useState } from 'react';
import './ListView.css';
import ListViewHeader from './ListViewHeader/ListViewHeader';
import ListViewItem from './ListViewItem/ListViewItem';
import Cookies from 'js-cookie';
import { postRequest } from '../../functions_global/request';

function ListView(props) {
  const [selectedTask, setSelectedTask] = useState(null);

  function volunteer(){
    const data = {"user_id": Cookies.get("userId")};
    var request = postRequest(data, "http://localhost:5000/api/job/" + selectedTask);
    fetch(request).then((response) => {
      response.json().then((data) => {
        if(data){
          props.toggleIsThankyou(true);
        }
      });
    });
  }

  if(props.displayedTask){
  return (
    <div className = "listView">
      <ListViewHeader />
      {props.displayedTask.map((task, index) => {
          return(
            <ListViewItem
              {...task}
              key = {index}
              isSelectedTask = {selectedTask === task.id}
              setSelectedTask = {setSelectedTask}
              isEven = {index%2 === 0}/>
          )
      })}
      <div className = "volunterBtnContainer">
        {selectedTask ?
        <div className = "volunteerBtn" onClick = {volunteer}>
            Volunteer
        </div>:
        <div className = "volunteerBtn disabled">
          Volunteer
      </div>}
      </div>
    </div>
  );
        }
        else{
          return null;
        }
}

export default ListView;