import React from 'react';
import { useHistory } from "react-router-dom";

//css
import './MainDropdownMenu.css';

//icons
import  { FaCog } from 'react-icons/fa';
import { FiHelpCircle, FiLogOut } from 'react-icons/fi';

function MainDropdownMenu() {
    const history = useHistory();
    function logout(){
        history.push("/login")
    }
    return (
        <div className = "mainDropdownMenu">
        <div className = "mainDropdownMenuItem"><FaCog/>&nbsp;Settings</div>
        <div className = "mainDropdownMenuItem"><FiHelpCircle/>&nbsp;Help</div>
        <div className = "mainDropdownMenuItem" onClick = {logout}><FiLogOut/>&nbsp;Logout</div>
        </div>
    );
}

export default MainDropdownMenu;