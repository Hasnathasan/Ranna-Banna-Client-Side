import React from "react";

const Dessert = ({ dessert }) => {
  const { id, picture, food_name, detail } = dessert;
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-64 w-full"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {food_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{detail}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Dessert;
