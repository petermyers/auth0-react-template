import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="px-4 py-1 bg-gray-900 rounded h-10 mr-2"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <span className="text-sm text-white tracking-wider">Log Out</span>
    </button>
  );
};

export default LogoutButton;
