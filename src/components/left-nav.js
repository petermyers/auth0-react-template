import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="flex justify-center items-center py-2">
          <a
            href="/home"
            className="font-family-maven text-white text-3xl font-semibold"
          >
            App Name
          </a>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <NavLink
            to="/home"
            exact
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            activeClassName="active-nav-link opacity-100"
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            exact
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            activeClassName="active-nav-link opacity-100"
          >
            Profile
          </NavLink>
          <NavLink
            to="/external-api"
            exact
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            activeClassName="active-nav-link opacity-100"
          >
            External API
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default LeftNav;
