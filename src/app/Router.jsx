import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => (
  <Switch>
    {routes.map(route => (
      <Route path={route.href} exact={route.exact}>
        <route.component />
      </Route>
    ))}
  </Switch>
);
