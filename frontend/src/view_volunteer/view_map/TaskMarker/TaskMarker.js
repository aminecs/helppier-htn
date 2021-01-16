import React from 'react';
import { Marker } from 'react-map-gl';

//css
import './TaskMarker.css';

//icons
import { MdStars } from 'react-icons/md';

function TaskMarker(props) {
  return (
    <div className = "taskMarkerContainer" onClick = {() => props.setTaskDescriptionCardId(props.id)}>
        <Marker
        longitude = {props.longitude}
        latitude = {props.latitude}>
            <MdStars
            size = {30}
            className = {props.selected ? "selectedTaskIndicator" : "taskIndicator"}/>
        </Marker>
    </div>
  );
}

export default TaskMarker;