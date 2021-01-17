import React, {useState} from 'react';
import { postRequest } from '../functions_global/request';
import Logo from '../helppier assets/logoyellow.png';
import SignUpGraphics from '../helppier assets/SignUpGraphics.png';
import AuthInput from './AuthInput/AuthInput';
import Cookies from 'js-cookie';

//css
import './RegisterView.css';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';

function RegisterView() {

  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [curViewState, setCurViewState] = useState(0);
  
  //input onChange
  function onChangeUsername(value){
    setUsername(value);
  }



  function onChangeFirstname(value){
    setFirstname(value);
  }
  function onChangeLastname(value){
    setLastname(value);
  }

  function onChangePassword(value){
    setPassword(value);
  }

  function incrementCurView(){
    setCurViewState(curViewState +1);
  }

  //send request for reigster data to backend
  function registerUser(){
    const data = {firstname, lastname, "email": username, password};
    var request = postRequest(data, "http://localhost:5000/api/register");
    fetch(request).then((response) => {
      response.json().then((data) => {
        if(data){
          Cookies.set("userId",data.user_id);
          incrementCurView();
        }
      });
    });
  }
  
  if(curViewState === 1){
    return (<Step1
      name = {firstname}
      incrementCurView = {incrementCurView}/>)
  }
  else if(curViewState === 2){
    return(
      <Step2
      incrementCurView = {incrementCurView}/>
    )
  }
  else if(curViewState === 3){
    return(
      <Step3
      incrementCurView = {incrementCurView}/>
    )
  }
  else if(curViewState === 4){
    return(
      <Step4
        />
    )
  }
  else{
  return (
    <div className="registerView">
      <img width={100} src = {Logo} alt =""/>
      <div className = "registerMotto">Neighbours helping neighbours.</div>
      <AuthInput
        header = "First Name"
        value = {firstname}
        placeholder = "First name"
        onChange = {onChangeFirstname}/>
      <AuthInput
        header = "Last Name"
        value = {lastname}
        placeholder = "Last name"
        onChange = {onChangeLastname}/>
      <AuthInput
        header = "Username"
        value = {username}
        placeholder = "Username"
        onChange = {onChangeUsername}/>
      <AuthInput
        header = "Password"
        password = {true}
        value = {password}
        placeholder = "Password"
        onChange = {onChangePassword}/>
      <div className = "loginBtn" onClick = {registerUser}>
        Sign Up
      </div>
      <div>Already have an account?</div>
      <div style={{color: "#F8B62C"}}><b>Login here</b></div>
      <img src = {SignUpGraphics}  alt = ""/>
    </div>
  );
  }
}

export default RegisterView;