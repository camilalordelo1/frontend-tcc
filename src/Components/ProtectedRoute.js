import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { isAuthenticated } = useContext(AuthContext) 

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/adm" />
      }
    />
  );
}