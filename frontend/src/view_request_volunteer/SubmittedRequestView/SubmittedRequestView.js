import React from 'react';
import { useHistory } from "react-router-dom";

//css
import './SubmittedRequestView.css';

import RequestVolunteerImg from '../../helppier assets/requestvolunteer.png';

function SubmittedRequestView() {
  const history = useHistory();
  return (
    <div className = "submittedRequestView">
      <img src = {RequestVolunteerImg} width = {300} alt = ""/>
      <div><b>Your request for a volunteer has been submitted</b></div>
      <div>Navigate to the Volunteer tab to see your latest request.</div>
      <div className = "submittedRequestViewBtns">
        <div className = "viewPostingBtn" onClick = {() => history.push("/profile")}>See my Posting</div>
        <div className = "goToProfileBtn" onClick = {() => history.push("/profile")}>Go to Profile</div>
      </div>
    </div>
  );
}

export default SubmittedRequestView;