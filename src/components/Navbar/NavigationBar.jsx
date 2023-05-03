import { Button, Navbar } from "flowbite-react";
import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <div>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex md:order-2">
        <Link to='/login'>
        <Button className="py-1 font-semibold" gradientDuoTone="pinkToOrange">
          Login
        </Button>
        </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg" href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="/navbars">
            Career
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
