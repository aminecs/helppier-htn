import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import LoginView from './view_login/LoginView';
import RegisterView from './view_register/RegisterView';
import RequestVolunteerView from './view_request_volunteer/RequestVolunteerView';
import VolunteerView from './view_volunteer/VolunteerView';

function Router() {
    return (
      <BrowserRouter>
        <Route exact path = "/login" component = {LoginView} />
        <Route exact path = "/register" component = {RegisterView} />
        <Route exact path = "/volunteer" component = {VolunteerView} />
        <Route exact path = "/request" component = {RequestVolunteerView} />
        <Route exact path = "/" component = {LoginView} />
      </BrowserRouter>
    );
  }

export default Router;