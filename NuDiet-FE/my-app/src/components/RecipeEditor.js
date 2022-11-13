import React, { useState, useEffect } from 'react';
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

function RecipeEditor(props) {
    return (
        <>
            <h1 className="mt-1">Recipes</h1>
            <RecipeList />
        </>
    );
}

export default RecipeEditor;


