import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../../common/user";

interface IProps {
  component: any;
  [key: string]: any;
}

const GuardedRoute = (data: Required<IProps>) => {
  let { component, ...rest } = data;
  let Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? <Component {...props} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default GuardedRoute;
