import React from 'react';
import './ThankyouPurchaseView.css';

//image
import ThankyouPurchaseImg from '../../helppier assets/thanksconfirmation.png';

function ThankyouPurchaseView(props) {
  return (
    <div className = "thankyouPurchaseView">
        <img src = {ThankyouPurchaseImg} width = {300} alt = ""/>
      <div><b>Thankyou so much for your contribution to WWF, Gillian!</b></div>
      <div>Your generosity and commitment will help create better a world.</div>
      <div className = "btfBtn" onClick = {() => props.toggle(false)}>Back to Profile</div>
    </div>
  );
}

export default ThankyouPurchaseView;