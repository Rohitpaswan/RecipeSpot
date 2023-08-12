/* * *
.................Component for display single item details ...................
**/

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../Services/Apidata";
import Button from "react-bootstrap/Button";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  //function to get recipe data from API
  const getSearchedResult = async () => {
    const result = await getRecipe(recipeId);
    console.log("resg", result.recipe);
    const recipeArray = result.recipe;
    setRecipe(recipeArray); // Update the state with the recipes array
  };
  useEffect(() => {
    getSearchedResult();
  }, [recipeId]);

  // console.log('type',typeof recipe.ingredients);
  // console.log('inf',recipe.ingredients);

  const ingredientList = recipe.ingredients
    ? recipe.ingredients.map((data, key) => (
        <p key={key} className="ingredient-item">
          {data}
        </p>
      ))
    : null;

  return (
    <>
      <div className="container mt-4">
        <div className="itemdetails">
          <div className="item-img mt-5 ">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              style={{ width: "18rem" }}
            />

            <Button
              variant="primary"
              as={Link}
              to="/recipe"
              className="back-button"
            >
              Back To Recipe List
            </Button>
          </div>
          <div className="details ms-2"></div>
          <Table>
            <tbody>
              <tr>
                <td>
                  <h3>{recipe.title}</h3>
                  <p>Provided By: {recipe.publisher} </p>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    as="a"
                    href={recipe.publisher_url}
                    variant="primary"
                    className="m-3"
                  >
                    Publisher Webpage
                  </Button>
                  <Button as="a" href={recipe.source_url} variant="success">
                    Recipe URL
                  </Button>
                </td>
              </tr>

              <tr>
                <td>
                  <h4> Ingredients</h4>
                  {ingredientList}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
