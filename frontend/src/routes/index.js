import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/chat/:username" component={Chat} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/:username" component={Dashboard} />
    </Switch>
  );
}
