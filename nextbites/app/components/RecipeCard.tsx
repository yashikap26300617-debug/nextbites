
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      <div className="recipe-content">
        <span className="recipe-category">
          {recipe.category}
        </span>

        <h2>{recipe.name}</h2>

        <p>{recipe.description}</p>

        <div className="recipe-time">
          ⏱ {recipe.cookingTime}
        </div>
      </div>
    </div>
  );
}
