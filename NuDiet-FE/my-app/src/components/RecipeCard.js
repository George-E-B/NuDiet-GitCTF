import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
const RecipeCard = ({ name, id, selectRecipe }) => {
    return (
        <Card className="item-list--item p-2" style={{ width: '18rem', height: '12rem' }}>
            {/*<Card.Img variant="top" src="https://picsum.photos/100" />*/}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This some information about this recipe.
                </Card.Text>
            </Card.Body>


            <Button variant="primary" onClick={() => selectRecipe(id)}>
                View Recipe
            </Button>


        </Card >
    );
};

export default RecipeCard;

//https://ui.dev/react-router-v5-url-parameters