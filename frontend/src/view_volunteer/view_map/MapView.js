import ReactMapGL from 'react-map-gl';
import React, { useState, useEffect } from 'react';

//css
import './MapView.css';

//mock data
import mock_task_data from '../../mock_task_data.json';

//components
import TaskDescriptionCard from './TaskDescriptionCard/TaskDescriptionCard';
import TaskMarker from './TaskMarker/TaskMarker';

function MapView(props) { 
  //location
  const [viewport, setViewport] = useState(null);
  const [taskDescriptionCardId, setTaskDescriptionCardId] = useState(null);

  //component did mount
  useEffect(() => {
    //user allow locaiton
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 10
        });
      });
    }
  }, []);



  if(viewport){
    return (
      <div className = "mapView">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle='mapbox://styles/mapbox/outdoors-v10?optimize=true'
          mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_API_KEY}
          onViewportChange={nextViewport => setViewport(nextViewport)}>
            {taskDescriptionCardId &&
              <TaskDescriptionCard
                id = {taskDescriptionCardId}/>}
            {mock_task_data.map((task, index) => {
              return(
                <TaskMarker
                  id =  {task._id}
                  longitude = {task.longitude}
                  latitude = {task.latitude}
                  selected = {task._id === taskDescriptionCardId}
                  setTaskDescriptionCardId = {setTaskDescriptionCardId}/>
              )
            })}
          </ReactMapGL>
      </div>
    );
  }
  else{
    return null;
  }
}

export default MapView;