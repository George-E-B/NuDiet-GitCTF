import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'
import RecipeDetails from './RecipeDetails'

const RECIPEDATA = [
    {
        "name": "recipe one",
        "id": 0
    },
    {
        "name": "recipe two",
        "id": 1
    },
    {
        "name": "recipe three",
        "id": 2
    },
    {
        "name": "recipe four",
        "id": 3
    },
    {
        "name": "recipe five",
        "id": 4
    },
    {
        "name": "recipe six",
        "id": 5
    },
    {
        "name": "recipe seven",
        "id": 6
    },

];


const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    // you will fetch data using useEffect
    useEffect(() => {
        //TODO: fetch the meta data from the db.
        // like id , name, etc
        //after fetching data
        setRecipes(RECIPEDATA)
    }, [])

    const handleSelectRecipe = (id) => {
        setSelectedRecipe(id)
    }

    return (
        <>
            {
                selectedRecipe !== null ? (<RecipeDetails id={selectedRecipe} backFunc={handleSelectRecipe} />) : (<div className="item-list">
                    {/* make the key the id of the recipe */}
                    {recipes ? recipes.map(({ id, name }) => <RecipeCard name={name} key={id} id={id} selectRecipe={handleSelectRecipe} />) : <h1>You have not added any recipes yet</h1>}
                </div>)
            }

        </>
    );


}

export default RecipeList;