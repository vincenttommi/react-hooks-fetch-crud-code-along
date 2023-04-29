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


//ading a callback function   to
//  pass updated item as a prop

function handleUpdateItem(updatedItem){
  console.log("In shoppingCart:", updatedItem);
}







//function to handle item

// adding a handleitem function to shoppinglist
// and passing a reference to that function as a prop to the itemform

function handleAddItem(newItem){

 setItems([...items,newItem]);
 //
//
//This is a function named "handleAddItem" 
//that takes in a parameter called "newItem". The function uses the "setItems" function to update the state of the "items" array by spreading the existing items using the spread operator "..." and adding the new item at the end of the array.

}
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* adding the onAddItem prop! */}
      <ItemForm  onAddItem={handleAddItem} />
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
