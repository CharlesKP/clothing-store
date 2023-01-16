//imports the Poduct component
//add() exists here, but passed via props to the Product component
import React, { useState } from "react";
import Product from "./Product";
import Button from "react-bootstrap/Button";

//import images
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import { Link } from "react-router-dom";

//array of t-shirts names, images and prices
let image = [one, two, three, four, five, six];
let name = [
  "Retro Power",
  "Live The 80s Dream",
  "New Retro Wave",
  "NRW Motors",
  "Michael Oakley, Turn Back Time",
  "Sello Rekt, LA Dreams",
];

let price = [30, 25.99, 28, 25, 32.99, 36];

function Shop() {
  //state for the total
  const [theTotal, setTotal] = useState(0);
  let sum = 0;
  //get price for onClick of product component
  //passed into the Product component via props
  //gets the sum of all tshirts purchased
  const add = (price) => {
    sum += price;
    setTotal(Math.round((theTotal + price) * 100) / 100);
  };

  //return with each product component and a proceed to checkout button
  return (
    <>
      <ul className="shopList">
        <Product add={add} name={name[0]} image={image[0]} price={price[0]} />
        <Product add={add} name={name[1]} image={image[1]} price={price[1]} />
        <Product add={add} name={name[2]} image={image[2]} price={price[2]} />
        <Product add={add} name={name[3]} image={image[3]} price={price[3]} />
        <Product add={add} name={name[4]} image={image[4]} price={price[4]} />
        <Product add={add} name={name[5]} image={image[5]} price={price[5]} />
      </ul>
      <div className="proceed">
        {/* displays the total from each tshirt 'bought' */}

        <h3> Total</h3>
        <h1> ${theTotal}</h1>

        {/* Link below passes state (theTotal) to path "/Checkout" */}

        <Link to={{ pathname: "/Checkout", state: { theTotal } }}>
          <Button className="btn btn-dark">Checkout</Button>
        </Link>
      </div>
    </>
  );
}
//export component
export default Shop;
