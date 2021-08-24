import React from "react";

import LoginButton from "./login-button";

import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./signup-button";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <LoginButton />
        <span className="mx-2 text-sm">or</span>
        <SignupButton />
      </>
    )
  );
};

export default AuthenticationButton;
