import React from 'react';
import './RequestedItem.css';

function RequestedItem(props) {
  return (
    <div className = "profileViewMyRequestItem">
        <div className = "profileViewMyRequestItemValue"><b>Request Posted</b></div>
        <div className = "profileViewMyRequestItemValue">{props.postDate}</div>
        <div className = "profileViewMyRequestItemValue">{props.task}</div>
        <div className = "profileViewMyRequestItemValue">{props.time} min</div>
        <div className = "profileViewMyRequestItemValue">{props.points} points</div>
    </div>
  );
}

export default RequestedItem;