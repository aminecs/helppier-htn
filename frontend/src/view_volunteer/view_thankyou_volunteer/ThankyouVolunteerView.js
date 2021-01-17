import React, { useEffect, useState } from 'react';
import './ThankyouVolunteerView.css';
import ReactMapGL from 'react-map-gl';

//icons
import  { GiAlliedStar } from 'react-icons/gi';

import UserProfilePic from '../../helppier assets/person 1.png';

function ThankyouVolunteerView() {
    const [viewport, setViewport] = useState(null);

    //component did mount
    useEffect(() => {
    //user allow locaiton
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 11
        });
        });
    }
    }, []);
  return (
    <div className = "thankyouVolunteerView">
        <div><b>Thank you for volunteering to help Nancy!</b></div>
        <div>We’ve sent Nancy a message to let them know that you volunteered. Please see the details of your task below.</div>
        <div className = "thankyouVolunteerViewBody">
            <div className = "thankyouVolunteerViewBodyLeft">
                <div><b>Who you're Helping</b></div>
                <div className = "whoYoureHelpingCard">
                    <div><img src = {UserProfilePic} width = {70} alt = ""/></div>
                    <div>
                        <div style = {{fontWeight: "bold", paddingTop: 10, paddingBottom: 0}}>Nancy Mcdonald</div>
                        <div style = {{paddingBottom: 0}}>70 year old</div>
                        <div style = {{paddingBottom: 15}}>Grandma, Gardener. Chess Enthusiast</div>
                        <div><b>22 Diagon Alley, Southwark SE1 3RA</b></div>
                        <div><b>416.222.2222</b></div>
                    </div>
                </div>
                <div style = {{fontWeight: "bold", paddingTop: 25, paddingBottom: 0}}>Description</div>
                <div className = "whoYoureHelpingCard" style = {{flex: 1}}>Description........</div>
                <div style = {{paddingTop: 15, display: "flex", alignItems: "center"}}><GiAlliedStar color = "#F8B62C" size = {20}/> &nbsp;You will Receieve 500 points for this task</div>
            </div>
            <div className = "thankyouVolunteerViewBodyRight">
                <div className = "thankyouVolunteerViewBodyRightHeader">
                    <div><b>Location</b></div>
                    <div>22 Diagon Alley, Southwark SE1 3RA</div>
                </div>
                <div className = "thankyouVolunteerViewMap">
                  <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle='mapbox://styles/mapbox/outdoors-v10?optimize=true'
                    mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_API_KEY}
                    onViewportChange={nextViewport => setViewport(nextViewport)}>
                  </ReactMapGL>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ThankyouVolunteerView;