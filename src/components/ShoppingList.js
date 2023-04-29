import React, { useState } from "react";
import { useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // // Update selectedCategory by passing the array of  selectedCategory to  selectedCategory to 
  const [items, setItems] = useState([]);
  // // Update state by passing the array of items to setItems

// adding use effect hook to fetch data from  json api

useEffect(() =>{
  fetch("http://localhost:4000/items")
     .then((r) => r.json())
     .then((items) => console.log(items))



},[]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
} 

export default ShoppingList;
