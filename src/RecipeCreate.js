import React, {useState} from "react";

function RecipeCreate({recipes, setRecipes}) {
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photoUrl: "",
    ingredients: "",
    preparation: "",
    }
  
  const [formData, setFormData] = useState({ ...initialFormState })

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log("formData:", formData)
    console.log("recipes before:", recipes)                             
                                 
          
     setRecipes([...recipes, formData])
    
    setFormData({...initialFormState})
    console.log("recipes after:", recipes)  
  
  }
  
  
   const handleInputChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td> <input 
                   id="name"
                   type="text" 
                   name="name" 
                   value={formData.name}
                   onChange={handleInputChange}
                   /></td>
            <td> <input 
                   id="cuisine"
                   type="text" 
                   name="cuisine"
                   value={formData.cuisine}
                   onChange={handleInputChange}
                   /></td>
            <td> <input 
                   id="photoUrl"
                   type="text" 
                   name="photo"
                   value={formData.photo}
                   onChange={handleInputChange}
                   /></td>
            <td> <textarea 
                   id="ingredients"
                   type="text" 
                   name="ingredients"
                   value={formData.ingredients}
                   onChange={handleInputChange}
                   /></td>
            <td> <textarea 
                   id="preparation"
                   type="text" 
                   name="preparation"
                   value={formData.preparation}
                   onChange={handleInputChange}
                   /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
