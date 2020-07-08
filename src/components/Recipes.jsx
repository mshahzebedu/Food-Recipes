import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const { recipies } = props;
  return (
    <div className="card-columns">
      {recipies.map((recipe) => (
        <RecipeItem
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredient={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
