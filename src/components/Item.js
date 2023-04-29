import React from "react";
function Item({ item }) {
  // adding function yo handle button click
function handleAddToClick(){
  // ading  fetch request so t update our data
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
  .then((updatedItem) => console.log(updatedItem));
  }




  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Item;
