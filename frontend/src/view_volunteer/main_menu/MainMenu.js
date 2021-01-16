import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

//css
import './MainMenu.css';

//icons
import { FcReddit } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';

function MainMenu(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className = "mainMenu">
        <div className = "mainMenuLeft">
            <div><FcReddit className = "logo" size = {25}/></div>
            <div className = {props.isRequestView ? "mainMenuTabBtn" : "mainMenuTabBtn mainMenuSelected"} onClick = {() => history.push("/volunteer")}>Volunteer</div>
            <div className = {!props.isRequestView ? "mainMenuTabBtn" : "mainMenuTabBtn mainMenuSelected"} onClick = {() => history.push("/request")}>Request a Volunteer</div>
            <div className = "mainMenuTabBtn" onClick = {() => props.toggleIsRequestView(true)} onClick = {() => history.push("/profile")}>Profile</div>
        </div>
        <div className = "mainMenuRight">
          <FaUserCircle size = {30}/>
        </div>
    </div>
  );
}

export default MainMenu;