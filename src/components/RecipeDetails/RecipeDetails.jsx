import { Avatar } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const RecipeDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    _id,
    name,
    picture,
    number_of_recipes,
    year_of_experience,
    likes,
    bio,
    recipes,
  } = chef;
  
  const notify = () => {
    toast.success("Recipe added to Favourite", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col text-center w-1/2 mx-auto my-14 items-center">
      <LazyLoad height={320}>
        <img className="w-96 rounded-full" src={picture} alt="" />
      </LazyLoad>
        <h2 className="text-4xl mt-3 font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500">
          {name}
        </h2>
        <p className="text-base my-2 font-semibold text-slate-600">{bio}</p>
        <div className="flex gap-11">
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-red-600">
            {likes} Likes
          </p>
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-red-600">
            {number_of_recipes} Recipes
          </p>
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-red-600">
            {year_of_experience} Year Experience
          </p>
        </div>
      </div>
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500 text-center">
        RECIPES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        {recipes.map((recipe) => (
          <Recipe
            notify={notify}
            key={recipes.indexOf(recipe)}
            recipe={recipe}
          ></Recipe>
        ))}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default RecipeDetails;