import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { _id, name, picture, number_of_recipes, year_of_experience, likes } =
    chef;
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm w-full">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={picture}
        >
          <h5 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500">
            {name}
          </h5>
          <div className="flex justify-between">
            <p className="text-base text-slate-600 font-semibold">
              {year_of_experience} Year experience
            </p>
            <p className="text-base text-slate-600 font-semibold">
              {number_of_recipes} Recipes
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base text-slate-600 font-semibold">
              {likes} Likes
            </p>
            <Link to={`chef/${_id}`}>
              <Button
                outline={true}
                gradientDuoTone="pinkToOrange"
                className=""
              >
                <span className="font-semibold text-slate-600 hover:text-white">
                  See Recipes
                </span>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chef;
