import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipe, searchedQuery }) => {
  //console.log("list", recipe);

  if (recipe === null)
    //if no recipe is find from data
    return (
      <div>
        <h3 style={{ textAlign: "center", margin: "3rem" }}>
          Sorry, No Recipe Available for{" "}
          <span style={{ color: "blue" }}>{searchedQuery}</span>{" "}
        </h3>
      </div>
    );

  return (
    <div className="container row ml-auto">
      {recipe &&
        recipe.map((val, key) => {
          return <RecipeListItem key={key} recipe={val} />;
        })}
    </div>
  );
};

export default RecipeList;
