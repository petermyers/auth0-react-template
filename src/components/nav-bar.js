import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import md5 from "md5";

const NavBar = () => {
  const [isAvatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();
  const { email } = user || { email: "" };

  const md5Email = md5(email);
  const gravatarUrl = `https://gravatar.com/avatar/${md5Email}?d=identicon`;

  const toggleDropdown = () => setAvatarMenuOpen(!isAvatarMenuOpen);
  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="h-header w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end items-center">
          <AuthenticationButton />
          {isAuthenticated && (
            <img
              alt="avatar"
              src={gravatarUrl}
              onClick={toggleDropdown}
              className="relative z-10 w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:shadow-lg"
            ></img>
          )}
          {isAvatarMenuOpen && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-24">
              <Link
                onClick={() => {
                  logout({
                    returnTo: window.location.origin,
                  });
                }}
                className="block px-4 py-2 account-link hover:text-white"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </header>

      <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-white text-3xl font-semibold hover:text-gray-300"
          >
            App Name
          </a>
          <button className="text-white text-3xl focus:outline-none">
            {!isMobileMenuOpen && (
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            )}
            {isMobileMenuOpen && (
              <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="flex flex-col pt-4 ">
            <NavLink
              to="/"
              onClick={toggleMenu}
              exact
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
              activeClassName="active-nav-link opacity-100"
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              onClick={toggleMenu}
              exact
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
              activeClassName="active-nav-link opacity-100"
            >
              Profile
            </NavLink>
            <NavLink
              to="/external-api"
              onClick={toggleMenu}
              exact
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
              activeClassName="active-nav-link opacity-100"
            >
              External API
            </NavLink>
            {isAuthenticated && (
              <>
                <hr />
                <button
                  onClick={() => {
                    logout({
                      returnTo: window.location.origin,
                    });
                  }}
                  className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <>
                <hr />
                <button
                  onClick={() => {
                    loginWithRedirect();
                  }}
                  className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    loginWithRedirect({ screen_hint: "signup" });
                  }}
                  className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>
        )}
      </header>
    </>
  );
};

export default NavBar;
