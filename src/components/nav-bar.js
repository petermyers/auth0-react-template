import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import md5 from "md5";

const NavBar = ({ isOnboarding }) => {
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
      <header className="h-auto w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2">
          <a
            href="/"
            className="font-family-maven header-text text-3xl font-semibold"
          >
            App Name
          </a>
        </div>
        <div className="relative w-1/2 flex justify-end items-center">
          {isAuthenticated && (
            <img
              alt="avatar"
              src={gravatarUrl}
              onClick={toggleDropdown}
              className="gravatar-image relative z-10 rounded-full overflow-hidden cursor-pointer hover:shadow-lg"
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
                Logout
              </Link>
            </div>
          )}
        </div>
      </header>

      <header className="h-auto align-middle w-full bg-white py-2 px-6 sm:hidden">
        <div className="flex items-center justify-between w-full">
          <a
            href="/home"
            className="font-family-maven header-text text-3xl font-semibold"
          >
            App Name
          </a>
          <button className="flex items-center header-text text-3xl focus:outline-none">
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
            {!isOnboarding && (
              <>
                <NavLink
                  to="/home"
                  onClick={toggleMenu}
                  exact
                  className="flex items-center header-text hover:text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                  activeClassName="active-nav-link text-white opacity-100"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/profile"
                  onClick={toggleMenu}
                  exact
                  className="flex items-center header-text hover:text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                  activeClassName="active-nav-link text-white opacity-100"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/external-api"
                  onClick={toggleMenu}
                  exact
                  className="flex items-center header-text hover:text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                  activeClassName="active-nav-link text-white opacity-100"
                >
                  External API
                </NavLink>
              </>
            )}
            {isAuthenticated && (
              <>
                <hr />
                <button
                  onClick={() => {
                    logout({
                      returnTo: window.location.origin,
                    });
                  }}
                  className="flex items-center header-text hover:text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                >
                  Logout
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
