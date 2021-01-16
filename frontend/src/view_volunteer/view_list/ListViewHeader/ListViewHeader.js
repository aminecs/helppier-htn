import React from 'react';
import './ListViewHeader.css';

function ListViewHeader() {
  return (
    <div className = "listViewHeader">
        <div className = "listViewHeaderValue">Name</div>
        <div className = "listViewHeaderValue">Task Type</div>
        <div className = "listViewHeaderValue">Time Needed</div>
        <div className = "listViewHeaderValue">Distance</div>
        <div className = "listViewHeaderValue">Rewards</div>
    </div>
  );
}

export default ListViewHeader;