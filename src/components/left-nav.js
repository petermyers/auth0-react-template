import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a
            href="/"
            className="text-white text-3xl font-semibold hover:text-gray-300"
          >
            App Name
          </a>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <NavLink
            to="/"
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
