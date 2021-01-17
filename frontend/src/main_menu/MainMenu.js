import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

//css
import './MainMenu.css';

//icons
import { GiAlliedStar } from 'react-icons/gi';

//icons
import LogoYellow from '../helppier assets/logoyellow.png';
import LogoBlue from '../helppier assets/logoblue.png';
import LogoOrange from '../helppier assets/logoorange.png';

//components
import MainDropdownMenu from './MainDropdownMenu/MainDropdownMenu';


function MainMenu(props) {
  const history = useHistory();
  const location = useLocation();

  const [dropdownMenuVisible, toggleDropdownMenuVisible] = useState(false);
  const [curPoints, setCurPoints] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/user/" + Cookies.get("userId")).then((response => response.json()))
      .then((data) => {
        console.log(data.user);
        if(data.user){
          setCurPoints(data.user.rewards);
        }
      })
  }, []);

  return (
    <div className = "mainMenu">
      {dropdownMenuVisible &&
      <MainDropdownMenu />}
        <div className = "mainMenuLeft">
            <div onClick = {() => toggleDropdownMenuVisible(!dropdownMenuVisible)}><img src = {location.pathname === "/volunteer" ? LogoYellow : location.pathname === "/request" ? LogoBlue : LogoOrange} width = {50}/></div>
            <div className = {location.pathname === "/volunteer" ? "mainMenuTabBtn mainMenuSelectedGold" : "mainMenuTabBtn"} onClick = {() => history.push("/volunteer")}>Volunteer</div>
            <div className = {location.pathname === "/request" ? "mainMenuTabBtn mainMenuSelectedBlue" : "mainMenuTabBtn"} onClick = {() => history.push("/request")}>Request a Volunteer</div>
            <div className = {location.pathname === "/profile" ? "mainMenuTabBtn mainMenuSelectedOrange" : "mainMenuTabBtn"} onClick = {() => history.push("/profile")}>Profile</div>
        </div>
        <div className = "mainMenuRight">
          <GiAlliedStar size = {20}/> &nbsp; {curPoints} points
        </div>
    </div>
  );
}

export default MainMenu;