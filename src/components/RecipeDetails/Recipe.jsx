import { Button } from "flowbite-react";
import React, { useState } from "react";
import {
  FaBookmark,
  FaCheckCircle,
  FaRegStar,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";

const Recipe = ({ recipe, notify }) => {
  const { image, name, ingredients, rating, cooking_method } = recipe;
  const [isDisable, setIsDisable] = useState(false);
  const showNotifyandDisable = () => {
    notify();
    setIsDisable(true);
  };
  return (
    <div className="p-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <LazyLoad height={320}>
          <figure>
            <img className="w-full rounded-t-2xl h-80" src={image} alt={name} />
          </figure>
        </LazyLoad>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-700 text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500">
              {name}
            </h2>
            <Button
              outline={true}
              gradientDuoTone="pinkToOrange"
              onClick={showNotifyandDisable}
              id="toastbtn"
              className={`${isDisable ? "hidden" : ""}`}
            >
              <span className="font-semibold flex items-center text-slate-600 hover:text-white">
                <FaBookmark></FaBookmark>
              </span>
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-red-500"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <h4>{rating}</h4>
          </div>

          <h3 className="text-xl font-semibold text-gray-700">Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li
                key={ingredients.indexOf(ingredient)}
                className="flex items-center mb-2 ml-4 gap-2 text-lg"
              >
                <FaCheckCircle className="text-green-500"></FaCheckCircle>{" "}
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold text-gray-700">Recipe:</h2>
          <p className="text-lg font-medium text-gray-600">{cooking_method}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
