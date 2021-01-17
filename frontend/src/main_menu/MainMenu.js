import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

//css
import './MainMenu.css';

//icons
import { FcReddit } from 'react-icons/fc';
import { GiAlliedStar } from 'react-icons/gi';

//components
import MainDropdownMenu from './MainDropdownMenu/MainDropdownMenu';


function MainMenu(props) {
  const history = useHistory();
  const location = useLocation();

  const [dropdownMenuVisible, toggleDropdownMenuVisible] = useState(false);

  return (
    <div className = "mainMenu">
      {dropdownMenuVisible &&
      <MainDropdownMenu />}
        <div className = "mainMenuLeft">
            <div onClick = {() => toggleDropdownMenuVisible(!dropdownMenuVisible)}><FcReddit className = "logo" size = {25}/></div>
            <div className = {location.pathname === "/volunteer" ? "mainMenuTabBtn mainMenuSelectedGold" : "mainMenuTabBtn"} onClick = {() => history.push("/volunteer")}>Volunteer</div>
            <div className = {location.pathname === "/request" ? "mainMenuTabBtn mainMenuSelectedBlue" : "mainMenuTabBtn"} onClick = {() => history.push("/request")}>Request a Volunteer</div>
            <div className = {location.pathname === "/profile" ? "mainMenuTabBtn mainMenuSelectedOrange" : "mainMenuTabBtn"} onClick = {() => history.push("/profile")}>Profile</div>
        </div>
        <div className = "mainMenuRight">
          <GiAlliedStar size = {20}/> &nbsp; 6000 points
        </div>
    </div>
  );
}

export default MainMenu;