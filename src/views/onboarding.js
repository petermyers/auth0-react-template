import NavBarOnboarding from "../components/nav-bar-onboarding";
import { useForm } from "react-hook-form";
import React, { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/user-context";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const Onboarding = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const { resetCurrentUserState } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const submitData = async () => {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${serverUrl}/users`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    };

    submitData()
      .then((data) => {
        if (!data.error || data.error === "ALREADY_ONBOARDED") {
          setIsSubmitting(false);
          resetCurrentUserState();
        }
        // TODO - handle other errors...
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
      });
    setIsSubmitting(true);
  };

  return (
    <>
      <div className="w-full h-screen overflow-y-hidden">
        <NavBarOnboarding />

        <div className="mt-8 w-full flex flex-col items-center justify-center px-5">
          <h1 className="text-3xl text-center">
            First, tell us a little about yourself
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 w-full max-w-md"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-full">
                <label
                  className="block text-gray-500 font-bold text-left mb-2 pr-4"
                  htmlFor="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="w-full">
                <input
                  placeholder="Your name"
                  className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500".concat(
                    errors.name ? " border-red-600" : ""
                  )}
                  id="inline-full-name"
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "You'll need to give us your name.",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="w-full">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
