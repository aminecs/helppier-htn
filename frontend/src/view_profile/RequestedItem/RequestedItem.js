import React from 'react';
import './RequestedItem.css';

function RequestedItem(props) {
  return (
    <div className = "profileViewMyRequestItem">
        <div className = "profileViewMyRequestItemValue"><b>Request Posted</b></div>
        <div className = "profileViewMyRequestItemValue">{props.created_at}</div>
        <div className = "profileViewMyRequestItemValue">{props.job_type}</div>
        <div className = "profileViewMyRequestItemValue">{props.time_needed_mins} min</div>
        <div className = "profileViewMyRequestItemValue">{props.reward} points</div>
    </div>
  );
}

export default RequestedItem;