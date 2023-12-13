import React, { useEffect, useState } from "react";
import Dessert from "./Dessert";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-server-side-weld.vercel.app/deserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl md:text-4xl my-7 font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500 text-center">
        Try our all new Desserts
      </h1>
      <div className="container mx-auto my-28 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8">
        {desserts.map((dessert) => (
          <Dessert key={dessert.id} dessert={dessert}></Dessert>
        ))}
      </div>
    </div>
  );
};

export default Desserts;
