import React from "react";
import bg from "../../assets/bg.jpg";
import { Button } from "flowbite-react";

const HomeBanner = () => {
  return (
    <div
      className="md:h-screen bg-center bg-cover rounded h-56 py-10 px-2 md:p-10 mb-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-right mt-2 md:mt-32">
        <h3 className="text-xl md:text-5xl font-bold italic">Find your</h3>
        <h1 className="text-2xl md:text-8xl italic font-bold text-gray-700 text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500">
          FOODDY RECIPE
        </h1>
        <h4 className="text-xs md:text-2xl font-medium md:font-bold italic">
          Indulge in Delicious Delights: <br /> Ultimate Destination for
          Mouth-watering Recipes!
        </h4>
      </div>
      <Button outline={true} gradientDuoTone="pinkToOrange" className="float-right mt-2 md:mt-14">
        <span className="font-semibold text-slate-600 hover:text-white">
          See Recipes
        </span>
      </Button>
    </div>
  );
};

export default HomeBanner;
