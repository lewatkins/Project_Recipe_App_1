import React from "react";

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h1>{recipe.name}</h1>
      <p>{recipe.cuisine}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.preparation}</p>
      <img src={recipe.photo} />
    </div>
  );
}

export default Recipe;
