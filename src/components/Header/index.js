import React from "react";
import { connect } from "react-redux";

import { Link, NavLink, withRouter } from "react-router-dom";
import { toggleBurgerMenu, closeBurgerMenu } from "./data/actions";

const Header = ({
  onToggleBurgerMenu,
  onCloseBurgerMenu,
  burgerMenuActive,
  authenticated
}) => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link
            to={authenticated ? "/dashboard" : "/"}
            className="navbar-item"
            onClick={onCloseBurgerMenu}
          >
            <img src={""} alt="AppLogo" height="28" />
          </Link>
          <div
            onClick={onToggleBurgerMenu}
            className={"navbar-burger " + (burgerMenuActive ? "is-active" : "")}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu " + (burgerMenuActive ? "is-active" : "")}>
          <div className="navbar-start" />

          <div className="navbar-end">
            {authenticated &&
              <NavLink
                to="/dashboard"
                className="navbar-item"
                onClick={onCloseBurgerMenu}
              >
                Dashboard
              </NavLink>}
            {!authenticated &&
              <NavLink
                exact
                to="/"
                className="navbar-item"
                onClick={onCloseBurgerMenu}
              >
                Home
              </NavLink>}
            {!authenticated &&
              <NavLink
                to="/login"
                className="navbar-item"
                onClick={onCloseBurgerMenu}
              >
                Login
              </NavLink>}
            {!authenticated &&
              <NavLink
                to="/signup"
                className="navbar-item"
                onClick={onCloseBurgerMenu}
              >
                Signup
              </NavLink>}
            {authenticated &&
              <NavLink
                to="/logout"
                className="navbar-item"
                onClick={onCloseBurgerMenu}
              >
                Logout
              </NavLink>}
          </div>

        </div>
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    burgerMenuActive: state.header.burgerMenuActive,
    authenticated: state.user.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleBurgerMenu: () => dispatch(toggleBurgerMenu()),
    onCloseBurgerMenu: () => dispatch(closeBurgerMenu())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
