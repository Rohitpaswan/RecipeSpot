export async function Apidata(searchedQuery) {
    try {
        const url = `https://forkify-api.herokuapp.com/search?q=${searchedQuery}`;
        const response = await fetch(url);

        //to check response from server
        if (response.ok) {
            const recipe = await response.json();
            
            console.log(recipe);
            return recipe; // Return the fetched data
        }
        else {
            console.log("No response from server");
       
            return null; // Return null or handle the error case
        }
    } catch (e) {
        console.log(e);
        throw e; // Re-throw the error to be caught higher up
    }
}

//Api call for get recipe
export async function getRecipe(recipeId) {
    try {
        const url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;
        const response = await fetch(url);

        //to check response from server
        if (response.ok) {
            const recipe = await response.json();
            
            console.log(recipe);
            return recipe; // Return the fetched data
        }
        else {
            console.log("No response from server");
       
            return null; // Return null or handle the error case
        }
    } catch (e) {
        console.log(e);
        throw e; // Re-throw the error to be caught higher up
    }
}