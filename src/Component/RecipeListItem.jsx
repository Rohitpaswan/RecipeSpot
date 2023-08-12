import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe,searchedQuery }) => {
  

  return (
    <>

        
         
        
       
            <Card
              style={{ width: "18rem", margin: "3rem" }}
              key={recipe.recipe_id}
            >
              <Card.Img
                variant="top"
                src={recipe.image_url}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.publisher}</Card.Text>
                <Button
                  variant="success"
                  style={{ marginRight: "2rem" }}
                  as={"a"}
                  href={recipe.source_url}
                >
                  Recipe_URL
                </Button>
                <Button
                  variant="primary"
                  as={Link}
                  to={`/recipe/${recipe.recipe_id}`}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
        
   
      
    
    </>
  );
};

export default RecipeListItem;
