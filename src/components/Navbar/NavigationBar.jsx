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
            <>
              <div>
                <div
                  id="tooltip-jese"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  hii khan
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <img
                  data-tooltip-target="tooltip-jese"
                  className="w-10 h-10 rounded"
                  src={user.photoURL}
                  alt="Medium avatar"
                />
              </div>
              <Button
                onClick={signout}
                className="py-1 font-semibold"
                gradientDuoTone="pinkToOrange"
              >
                Logout
              </Button>
            </>
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
                      isActive
                        ? "text-orange-500"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-orange-500 ease-out duration-300">Home</span>
          </NavLink>
          </li>
        <li>
          <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-500"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-orange-500 ease-out duration-300">Blog</span>
          </NavLink>
        </li>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
