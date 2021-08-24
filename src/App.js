import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/loading";

import "./App.css";
import LeftNav from "./components/left-nav";
import PageContent from "./components/page-content";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <LeftNav />
      <PageContent />
    </>
  );
};

export default App;
