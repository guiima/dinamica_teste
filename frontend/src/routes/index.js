import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
