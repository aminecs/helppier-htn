import React from 'react';
import './Step4.css';
import Onboard1Graphic from '../../helppier assets/onboard1graphic.png';
import LogoYellow from '../../helppier assets/logoyellow.png';
import { useHistory } from "react-router-dom";

function Step4(props) {
    const history = useHistory();
    return (
        <div className = "step1">
            <img width={250} src = {Onboard1Graphic} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 20}}>Earn rewards by helping others</div>
            <div>Each task you volunteer for helps you earn points to redeem gift cards or donate.</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#F8B62C"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F8B62C"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F8B62C"}}></div>
                <img width = {35} height = {35} src = {LogoYellow} alt = ""/>
            </div>
            <div className = "continueBtn" onClick = {() => history.push("/volunteer")}>Continue</div>
        </div>
    );
}

export default Step4;