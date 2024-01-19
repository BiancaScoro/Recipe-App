import React from 'react'
import '../components/Card.css'

const Card = ({recipe}) => {
    const ingredientsArray =
    recipe.ingredients.length > 0
      ? recipe.ingredients[0].split(', ')
      : [];

  return (
    <div className="card-container">
        <div className="card">
            <h2>{recipe.recipeName}</h2>
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
            {ingredientsArray.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
            </ul>
            <h3>Directions</h3>
            <p className="directions">{recipe.directions}</p>
        </div>
    </div>
  )
}

export default Card