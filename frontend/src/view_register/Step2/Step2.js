import React from 'react';
import './Step2.css';
import Onboard2Graphic from '../../helppier assets/onboard2graphic.png';
import LogoYellow from '../../helppier assets/logoblue.png';

function Step2(props) {
    return (
        <div className = "step1">
            <img width={250} src = {Onboard2Graphic} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 20}}>Volunteer to help your neighbours</div>
            <div style ={{fontWeight: "bold", fontSize: 15, textAlign: "center"}}>Volunteer to help with tasks such as dog walking, groceries <br/> and tutoring, while giving back to your community.</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#90CAE4"}}></div>
                <img width = {35} height = {35} src = {LogoYellow} alt = ""/>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
        </div>
    );
}

export default Step2;