import React from 'react';
import './Step1.css';
import Onboard1Graphic from '../../helppier assets/onboard1graphic.png';
import LogoYellow from '../../helppier assets/logoyellow.png';

function Step1(props) {
    return (
        <div className = "step1">
            <img width={250} src = {Onboard1Graphic} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 20}}>Welcome to the community, {props.name}</div>
            <div><span style = {{color: "#F8B62C", fontWeight: "bold"}}>helppier</span>’s mission is to foster community starting with neighbours helping neighbours.</div>
            <div className = "stepState">
                <img width = {35} height = {35} src = {LogoYellow} alt = ""/>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
        </div>
    );
}

export default Step1;