import React from "react";
import Button from "react-bootstrap/Button";

function Product({ name, image, price, add }) {
  //for each tshirt item passes props (name, image, price and an onClick function add())
  //each props except the add() is unique to each tshirt
  //add is passed from the Shop component
  return (
    <div>
      <br />
      <li key={name}>
        <img className="tshirt" src={image} alt="" />
        <br />
        <br />
        {name}
        <br />
        <br />
        <Button
          id={name}
          className="buy btn btn-outline-dark"
          onClick={() => add(price)}
        >
          ${price}
        </Button>
      </li>
    </div>
  );
}

//export component
export default Product;
