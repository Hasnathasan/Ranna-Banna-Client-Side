import React from "react";
import NavigationBar from "../Navbar/NavigationBar";
import { Outlet } from "react-router-dom";
import FooterContent from "../FooterContent/FooterContent";
import useTitle from "../../hooks/useTitle";

const HomeLayout = () => {
  useTitle("home");
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <FooterContent></FooterContent>
    </div>
  );
};

export default HomeLayout;
