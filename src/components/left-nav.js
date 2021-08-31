import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserIcon, ExternalLinkIcon } from "@heroicons/react/outline";

const LeftNav = () => {
  return (
    <>
      <aside className="fixed top-16 left-0 md:left-6 sm:block hidden">
        <nav className="text-white text-base font-semibold pt-3">
          <NavLink
            to="/home"
            exact
            className="flex items-center py-2 pl-6 text-gray-400 relative"
            activeClassName="text-pink-500 active-nav"
          >
            <HomeIcon className="h-10 w-10 hover:text-pink-500" />
            <div className="bar hidden -right-3 absolute h-3/4 w-1 bg-pink-500 rounded-sm"></div>
          </NavLink>
          <NavLink
            to="/profile"
            exact
            className="flex items-center py-2 pl-6 text-gray-400 relative"
            activeClassName="text-pink-500 active-nav"
          >
            <UserIcon className="h-10 w-10 hover:text-pink-500" />
            <div className="bar hidden -right-3 absolute h-3/4 w-1 bg-pink-500 rounded-sm"></div>
          </NavLink>
          <NavLink
            to="/external-api"
            exact
            className="flex items-center py-2 pl-6 text-gray-400 relative"
            activeClassName="text-pink-500 active-nav"
          >
            <ExternalLinkIcon className="h-10 w-10 hover:text-pink-500" />
            <div className="bar hidden -right-3 absolute h-3/4 w-1 bg-pink-500 rounded-sm"></div>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default LeftNav;
