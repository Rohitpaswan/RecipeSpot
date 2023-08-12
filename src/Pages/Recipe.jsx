import { useState, React, useEffect } from "react";
import Search from "../Component/Search";
import RecipeList from "../Component/RecipeList";
import { Apidata } from "../Services/Apidata";

const Recipe = () => {
  const [searchedQuery, setSearchedQuery] = useState("cake");   //search input
  const [recipe, setRecipe] = useState([]);     //state for recipe list
  const [isOnline, setIsOnline] = useState(true);
  console.log(searchedQuery);
  
  //function to get recipe data from API
  const getSearchedResult = async () => {
    try{
    const result = await Apidata(searchedQuery);
    if (result) {
      const recipesArray = result.recipes; // Extract the "recipes" array from the result
      setRecipe(recipesArray); // Update the state with the recipes array
    }
   else{
    <p>Do data</p>
    setRecipe(result)
   }
  }
    catch (error) {
      console.error("Error fetching recipe data:", error);
      setIsOnline(false)
      
    }
  };

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

 
  return (<>
    {isOnline ? (
      <>
      <Search recipe={recipe} setSearchedQuery={setSearchedQuery}/>
      <RecipeList recipe={recipe} searchedQuery={searchedQuery} />
      </>
    ) : (
      <div>
        <p>Please check your internet connection or Refresh Page.</p>
      </div>
    )}
  </>
  );
    }


export default Recipe;
