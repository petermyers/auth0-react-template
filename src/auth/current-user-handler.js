import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/user-context";

const CurrentUserHandler = ({ children }) => {
  const { currentUserState } = useContext(UserContext);
  const location = useLocation();

  const { current_user: currentUser } = currentUserState;
  if (!currentUser && location.pathname !== "/onboarding") {
    return <Redirect to="/onboarding" />;
  } else if (currentUser && location.pathname === "/onboarding") {
    // Send them to /home
    return <Redirect to="/home" />;
  } else {
    return <>{children}</>;
  }
};

export default CurrentUserHandler;
