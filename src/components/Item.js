import React,{useState} from "react";

function Item({name,category}) {
  const [inCart,setInCart]=useState(false)
  const itemClass=inCart? "in-cart":""
  const buttonText=inCart? "Add to Cart":"Remove From Cart"
  function addToCart() {
    setInCart(!inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
