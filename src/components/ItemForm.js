import React, { useState } from "react";
// React is state. 
//State is used to store data that can change over time and can be passed down to child components


function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
 // This code is a short form of a React hook that creates a state variable named 
 //"category" and a function named "setCategory" to update its value. 
 //The initial value of "category" is set to "Produce". 
 //The state variable can be used in the component and will trigger a
 // re-render when its value is updated with the "setCategory" function.

// add functions to handle submissions
function handleSubmit(e){
  e.preventDefault();
  console.log("name:",name);
  console("category:",category);


}




  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
