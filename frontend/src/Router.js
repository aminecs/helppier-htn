import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import LoginView from './view_login/LoginView';
import RegisterView from './view_register/RegisterView';
import MapView from './view_volunteer/VolunteerView';

function Router() {
    return (
      <BrowserRouter>
        <Route exact path = "/login" component = {LoginView} />
        <Route exact path = "/register" component = {RegisterView} />
        <Route exact path = "/map" component = {MapView} />
        <Route exact path = "/" component = {LoginView} />
      </BrowserRouter>
    );
  }

export default Router;