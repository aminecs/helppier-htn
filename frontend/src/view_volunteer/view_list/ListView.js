import React, { useState } from 'react';
import './ListView.css';
import ListViewHeader from './ListViewHeader/ListViewHeader';
import ListViewItem from './ListViewItem/ListViewItem';
import mock_task_data from '../../mock_task_data.json';

function ListView() {
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <div className = "listView">
      <ListViewHeader />
      {mock_task_data.map((task, index) => {
          return(
            <ListViewItem
              {...task}
              isSelectedTask = {selectedTask === task._id}
              setSelectedTask = {setSelectedTask}
              isEven = {index%2 === 0}/>
          )
      })}
      <div className = "volunterBtnContainer">
        {selectedTask ?
        <div className = "volunteerBtn">
            Volunteer
        </div>:
        <div className = "volunteerBtn disabled">
          Volunteer
      </div>}
      </div>
    </div>
  );
}

export default ListView;