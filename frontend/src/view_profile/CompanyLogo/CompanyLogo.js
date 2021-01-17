import React from 'react';
import './CompanyLogo.css';

function ComapnyLogo(props) {
  return (
    <div className = {props.isSelected ? "comapnyLogo selected" : "comapnyLogo"} onClick = {() => props.selectSelectedRedeemItem(props.value)}>
      <img src = {props.image} width = {100} alt = ""/>
    </div>
  );
}

export default ComapnyLogo;