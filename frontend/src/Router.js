import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import ProfileView from './view_profile/ProfileView';
import RegisterView from './view_register/RegisterView';
import RequestVolunteerView from './view_request_volunteer/RequestVolunteerView';
import VolunteerView from './view_volunteer/VolunteerView';

function Router() {
    return (
      <BrowserRouter>
        <Route exact path = "/register" component = {RegisterView} />
        <Route exact path = "/volunteer" component = {VolunteerView} />
        <Route exact path = "/request" component = {RequestVolunteerView} />
        <Route exact path = "/profile" component = {ProfileView} />
        <Route exact path = "/" component = {RegisterView} />
      </BrowserRouter>
    );
  }

export default Router;