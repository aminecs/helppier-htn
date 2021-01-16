import React, {useState} from 'react';
import { postRequest } from '../functions_global/request';
import './RegisterView.css';

function RegisterView() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  
  //input onChange
  function onChangeUsername(value){
    setUsername(value);
  }

  function onChangeEmail(value){
    setEmail(value);
  }

  function onChangeName(value){
    setName(value);
  }

  function onChangeDateOfBirth(value){
    setDateOfBirth(value);
  }

  //send request for reigster data to backend
  function registerUser(){
    const data = {username, email, name, dateOfBirth};
    var request = postRequest(data, "http://localhost:8080");
    fetch(request).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  }
  
  return (
    <div>
      <input
        placeholder = "Username"
        value = {username}
        onChange = {e => onChangeUsername(e.target.value)}/>
      <input
        placeholder = "Email"
        value = {email}
        onChange = {e => onChangeEmail(e.target.value)}/>
      <input
        placeholder = "Name"
        value = {name}
        onChange = {e => onChangeName(e.target.value)}/>
      <input
        placeholder = "Date of Birth"
        value = {dateOfBirth}
        onChange = {e => onChangeDateOfBirth(e.target.value)}/>
      <div className = "loginBtn" onClick = {registerUser}>
        Register
      </div>
    </div>
  );
}

export default RegisterView;