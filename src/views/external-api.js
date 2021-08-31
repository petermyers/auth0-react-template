import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [message, setMessage] = useState("Server response will appear here.");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/messages/public`);

      const responseData = await response.json();

      setMessage(JSON.stringify(responseData));
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${serverUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setMessage(JSON.stringify(responseData));
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-black">External API Call Example</h1>
      <div className="w-full h-auto px-2">
        <div className="flex flex-wrap mt-6">
          <p>
            Use these buttons to call an external API. The protected API call
            has an access token in its authorization header. The API server will
            validate the access token using the Auth0 Audience value.
          </p>
        </div>
        <div className="flex mt-5">
          <button
            className="text-white text-sm rounded px-6 py-2 btn-primary mr-2"
            onClick={callApi}
          >
            Get Public Message
          </button>
          <button
            type="button"
            className="text-white text-sm rounded px-6 py-2 btn-primary"
            onClick={callSecureApi}
          >
            Get Protected Message
          </button>
        </div>
        <h1 className="text-xl text-black mt-6">Result</h1>
        <div className="rounded w-full h-auto bg-gray-600 text-light p-4 text-white">
          {message}
        </div>
      </div>
    </>
  );
};

export default ExternalApi;
