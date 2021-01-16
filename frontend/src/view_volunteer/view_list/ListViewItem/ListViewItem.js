import React from 'react';
import './ListViewItem.css';

function ListViewItem() {
  return (
    <div className = "listViewItem">
      <div className = "listViewItemValue">
          Nancy M. (70 yrs)
      </div>
      <div className = "listViewItemValue">
          Delivery
      </div>
      <div className = "listViewItemValue">
          30 - 45 mins
      </div>
      <div className = "listViewItemValue">
          1km away
      </div>
      <div className = "listViewItemValue">
          500 points
      </div>
    </div>
  );
}

export default ListViewItem;