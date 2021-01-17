import React from 'react';

//css
import './ListViewHeader.css';

//icons
import { BsFilterLeft } from 'react-icons/bs';

function ListViewHeader() {
  return (
    <div className = "listViewHeader">
        <div className = "listViewHeaderValue">Name </div>
        <div className = "listViewHeaderValue">Date &nbsp; <BsFilterLeft /></div>
        <div className = "listViewHeaderValue">Task Type &nbsp; <BsFilterLeft /></div>
        <div className = "listViewHeaderValue">Time &nbsp;<BsFilterLeft /></div>
        <div className = "listViewHeaderValue">Distance &nbsp;<BsFilterLeft /></div>
        <div className = "listViewHeaderValue">Rewards</div>
    </div>
  );
}

export default ListViewHeader;