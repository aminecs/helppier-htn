import React, {useEffect, useState} from 'react';
import './ListViewItem.css';

function ListViewItem(props) {
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/api/user/${props.owner_id}`).then((response => response.json()))
      .then((data) => {
        setOwner(data.user);
    });
  }, [])
  return (
    <div
      className = {props.isEven ? "listViewItem listViewGolden" : "listViewItem"}
      onClick = {() => props.setSelectedTask(props.id)}>
      <div className = "listViewItemContainer">
        <div className = "listViewItemValue">
            {owner && owner.firstname} {owner && owner.lastname}
        </div>
        <div className = "listViewItemValue">
          {props.created_at}
        </div>
        <div className = "listViewItemValue">
            {props.job_type}
        </div>
        <div className = "listViewItemValue">
            {props.time_needed_mins} min
        </div>
        <div className = "listViewItemValue">
            {props.latitude + "," + props.longitude}
        </div>
        <div className = "listViewItemValue">
            {props.reward} &nbsp;points
        </div>
      </div>
      {props.isSelectedTask &&
      <div className = "listViewItemValueDescriptionContainer">
        <div className = "listViewItemValueDescription">
          "{props.description}"
        </div>
      </div>}
    </div>
  );
}

export default ListViewItem;