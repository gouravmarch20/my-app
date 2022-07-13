import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-fluid">
          <div className="navbar-left">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active navbar-link " : "navbar-link "
              }
            >
              Quiz-by
            </NavLink>
          </div>

          <div className="navbar-right">
            <NavLink
              to="./leaderboard"
              className={({ isActive }) =>
                isActive ? "nav-link-active navbar-link " : "navbar-link "
              }
            >
              leaderboard{" "}
            </NavLink>

            <NavLink
              to="./rules"
              className={({ isActive }) =>
                isActive ? "nav-link-active navbar-link " : "navbar-link "
              }
            >
              rules
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
