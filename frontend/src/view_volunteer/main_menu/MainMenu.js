import React from 'react';

//css
import './MainMenu.css';

//icons
import { FcReddit } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';

function MainMenu(props) {
  return (
    <div className = "mainMenu">
        <div className = "mainMenuLeft">
            <div><FcReddit className = "logo" size = {25}/></div>
            <div className = {props.isRequestView ? "mainMenuTabBtn" : "mainMenuTabBtn mainMenuSelected"} onClick = {() => props.toggleIsRequestView(false)}>Volunteer</div>
            <div className = {!props.isRequestView ? "mainMenuTabBtn" : "mainMenuTabBtn mainMenuSelected"} onClick = {() => props.toggleIsRequestView(true)}>Request a Volunteer</div>
        </div>
        <div className = "mainMenuRight">
          <FaUserCircle size = {30}/>
        </div>
    </div>
  );
}

export default MainMenu;