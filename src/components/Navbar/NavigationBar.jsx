import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, signout } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <div className="w-32 md:w-44">
          <Link to="/">
            <img className="w-full" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-3 md:order-2">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="avatar rounded-full tooltip tooltip-bottom" data-tip={user.displayName}>
                <div className="w-10 md:w-14 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <Button
                onClick={signout}
                className="py-1 font-semibold"
                gradientDuoTone="pinkToOrange"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button
                className="py-1 font-semibold"
                gradientDuoTone="pinkToOrange"
              >
                Login
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-orange-500" : isPending ? "pending" : ""
              }
            >
              <span className="text-base font-semibold hover:text-orange-500 ease-out duration-300">
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive ? "text-orange-500" : isPending ? "pending" : ""
              }
            >
              <span className="text-base font-semibold hover:text-orange-500 ease-out duration-300">
                Blog
              </span>
            </NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
