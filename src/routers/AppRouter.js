import React from "react";

import Home from "../scenes/Home";

import Login from "../scenes/User/Login";
import Signup from "../scenes/User/Signup";
import Logout from "../scenes/User/Logout";
import Reset from "../scenes/User/Reset";
import ResetSuccess from "../scenes/User/Reset/success";
import ResetToken from "../scenes/User/Reset/_token";
import Dashboard from "../scenes/Dashboard";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RequireAuthentication from "./RequireAuthentication";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/reset/success" component={ResetSuccess} />
        <Route path="/reset/:token" component={ResetToken} />
        <Route path="/reset" component={Reset} />
        <Route path="/dashboard" component={RequireAuthentication(Dashboard)} />
      </Switch>
      <Footer />
    </div>

  </BrowserRouter>
);

export default AppRouter;
