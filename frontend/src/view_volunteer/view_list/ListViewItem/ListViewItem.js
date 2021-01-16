import React, {useState} from 'react';
import './ListViewItem.css';

function ListViewItem(props) {
  return (
    <div
      className = {props.isEven ? "listViewItem listViewGolden" : "listViewItem"}
      onClick = {() => props.setSelectedTask(props._id)}>
      <div className = "listViewItemContainer">
        <div className = "listViewItemValue">
            {props.name}
        </div>
        <div className = "listViewItemValue">
          {props.createdDate}
        </div>
        <div className = "listViewItemValue">
            {props.type}
        </div>
        <div className = "listViewItemValue">
            {props.time} min
        </div>
        <div className = "listViewItemValue">
            {props.latitude + "," + props.longitude}
        </div>
        <div className = "listViewItemValue">
            {props.rewards} &nbsp;points
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