import React from "react";


//Destructuring the onUpdateItem,item and onDeleteItem  as Prop
function Item({ item, onUpdateItem,OnDeleteItem}) {



// adding a function  handle delete

function handleDeleteClick(){

  fetch(`http://localhost:4000/items/${item.id}`,{
  method:"DELETE",

  })
  .then((r) => r.json())
  .then(() => console.log("deleted!"));
}




  // adding function yo handle button click
function handleAddToCartClick(){
     // Call onUpdateItem, passing the data returned from the fetch request
  fetch(`http://localhost:4000/items/${item.id}`,{

       method : "PATCH",
       headers: {
        "content-Type": "application/json",
       },
       body: JSON.stringify({
          
          isInCart: !item.isInCart,
         
       }),
  })

  .then((r) => r.json())
  .then((updatedItem) => onUpdateItem(updatedItem));
  }




  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button  onClick={handleDeleteClick} className="remove">Delete</button>
    </li>
  );
}

export default Item;
