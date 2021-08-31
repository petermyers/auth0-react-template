import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/loading";

import "./App.css";
import Landing from "./views/landing";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";
import AppRouter from "./components/app-router";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <ProtectedRoute path="/" component={AppRouter} />
      </Switch>
    </>
  );
};

export default App;
