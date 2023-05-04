import React, { useEffect, useState } from "react";
import Chef from "./Chef";
import HomeBanner from "../HomeBanner/HomeBanner";
import { Spinner } from "flowbite-react";
import AccordianSection from "../AccordianSection/AccoudeanSection";
import Desserts from "../Desserts/Desserts";

const Chefs = () => {
  const [chefs, setChefs] = useState(null);
  useEffect(() => {
    fetch("https://chef-recipe-server-side-weld.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="container mx-auto">
      <HomeBanner></HomeBanner>
      <h1 className="text-2xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500 text-center">
        Our Masterminds
      </h1>
      {chefs ? (
        <div className="grid px-5 md:px-0 justify-center mt-10 mb-20 items-center gap-x-5 gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {chefs.map((chef) => (
            <Chef key={chef._id} chef={chef}></Chef>
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      )}

      <AccordianSection></AccordianSection>
      <Desserts></Desserts>
    </div>
  );
};

export default Chefs;
