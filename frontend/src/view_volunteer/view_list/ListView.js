import React from 'react';
import './ListView.css';
import ListViewHeader from './ListViewHeader/ListViewHeader';
import ListViewItem from './ListViewItem/ListViewItem';

function ListView() {
  return (
    <div className = "listView">
      <ListViewHeader />
      {[1,2,3].map((value, index) => {
          return(
            <ListViewItem />
          )
      })}
      <div className = "volunteerBtn">
          Volunteer
      </div>
    </div>
  );
}

export default ListView;