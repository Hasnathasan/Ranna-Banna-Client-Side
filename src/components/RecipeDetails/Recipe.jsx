import React from "react";

const Recipe = ({ recipe }) => {
  const { image, name, ingredients, rating, cooking_method } = recipe;
  return (
    <div className="p-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-80"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
