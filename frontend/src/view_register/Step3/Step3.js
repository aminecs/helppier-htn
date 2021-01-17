import React from 'react';
import './Step3.css';
import Onboard1Graphic from '../../helppier assets/onboard3graphic.png';
import LogoYellow from '../../helppier assets/logoorange.png';

function Step3(props) {
    return (
        <div className = "step1">
            <img width={250} src = {Onboard1Graphic} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 20}}>Request a volunteer</div>
            <div>Need a helping hand? You can also request help from your neighbours.</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <img width = {35} height = {35} src = {LogoYellow} alt = ""/>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
        </div>
    );
}

export default Step3;