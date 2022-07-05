import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const handleDelete = (index) => {
    setRecipes(recipes.filter((recipe) => recipe.name !== index))
  }

  const rows = recipes.map((recipe, index) => (
   <tr key={index}> 
      <td>{recipe.name}</td>
      <td>{recipe.cuisine} </td>
      <img src={recipe.photo} />
      <td>{recipe.ingredients} </td>
      <td>{recipe.preparation} </td>
      <td><button name="delete" onClick={() => handleDelete(recipe.name)}>Delete</button></td>
          </tr>
  ))
  
  
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
