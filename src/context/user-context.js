import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/loading";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [currentUserState, setCurrentUserState] = useState({
    current_user: null,
    loading: true,
  });
  const resetCurrentUserState = () => {
    setCurrentUserState({
      current_user: null,
      loading: true,
    });
  };
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${serverUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      return responseData;
    };

    if (currentUserState.loading) {
      fetchCurrentUser().then((currentUserResponse) => {
        setCurrentUserState(currentUserResponse);
      });
    }
  }, [getAccessTokenSilently, currentUserState.loading]);

  if (currentUserState.loading) {
    return <Loading />;
  } else {
    return (
      <UserContext.Provider value={{ currentUserState, resetCurrentUserState }}>
        <UserContext.Consumer>
          {(userContext) => <>{children}</>}
        </UserContext.Consumer>
      </UserContext.Provider>
    );
  }
};

export default UserContextProvider;
