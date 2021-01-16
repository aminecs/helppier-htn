import React, {useState} from 'react';
import { postRequest } from '../functions_global/request';
import './LoginView.css';
import { useHistory } from "react-router-dom";

function LoginView() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //onChange
  function onChangeUsername(value){
    setUsername(value);
  }

  function onChangePassword(value){
    setPassword(value);
  }

  function loginUser(){
    const data = {username, password};
    console.log(data);
    history.push("/volunteer");
    
    /*var request = postRequest(data, "http://localhost:8080");
    fetch(request).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });*/
  }

  return (
    <div>
      <input
        placeholder = "Username"
        value = {username}
        onChange = {e => onChangeUsername(e.target.value)}/>
      <input
        placeholder = "Password"
        value = {password}
        onChange = {e => onChangePassword(e.target.value)}/>
      <div className = "loginBtn" onClick = {loginUser}>
        Login
      </div>
    </div>
  );
}

export default LoginView;