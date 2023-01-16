import React, { useState, useEffect } from "react";

function Checkout(props) {
  let total = 0;

  //try get the state (theTotal) for "/Shop", if there is no
  //total (props.location.state.theTotal) user came directly from the nav link
  try {
    total = props.location.state.theTotal;
  } catch {
    console.log("No Shop Total: Came here from nav");
  }

  console.log(total);
  //if user enters into the input field state
  const [user, setUser] = useState(total);
  //slider state
  const [value, onChange] = useState(0);
  //monthly state
  const [monthly, setMonthly] = useState(0);
  //total interest state
  const [interest, setInterest] = useState(total);

  useEffect(() => {
    const ele = document.querySelector(".buble");
  });

  //function for user manually entering data into number text field
  function userInput() {
    let userField = document.getElementById("user").value;
    console.log(userField);
    setUser(userField);
    // total = user;
  }

  //function to update the money owed
  function findPayments(amount, months) {
    //format to numerical
    parseInt(amount);
    parseInt(months);

    //rate calculated monthly and further calculations for interest
    let rate = (1.6666 * months) / 100 + 1;
    let total = Math.round(amount * rate * 1) / 1;
    let payments = Math.round((total / months) * 1) / 1;
    console.log(amount + " " + months);

    //set state of total
    setInterest(total);

    //if payments not a number or infinity then they should rather display 0
    if (payments === Infinity || isNaN(payments)) {
      setMonthly(0);
    } else {
      setMonthly(payments);
    }
    console.log(monthly);
    console.log("state: " + monthly);
  }

  //return HTML for calculator
  return (
    <>
      <div className="main">
        <div className="text">
          <h1 className="heading">Payment Calculator</h1>
          <br />

          {/* placeholder = to value from shop 
onchange of this send to userInput function */}

          <input
            id="user"
            type="number"
            placeholder={user}
            onChange={() => {
              userInput();
            }}
            required
          ></input>
          <br />
          <label id="amount">Total: ${user}</label>
          <br />
          <label id="months">Months: {value}</label>
          <br />
          <br />

          {/* onChange slider radius = months
user (total) and raius (months)
entered to the interest calc findPayments Function */}

          <input
            id="slider-parent"
            type="range"
            min="0"
            max="24"
            value={value}
            onChange={({ target: { value: radius } }) => {
              onChange(radius);
              console.log("months: " + radius);
              console.log("amount: " + user);
              findPayments(user, radius);
            }}
          ></input>
          <br />
          <br />

          {/* updated values to total+interest and monthly payments to be paid */}

          <label className="red" id="total">
            Total: ${interest}
          </label>
          <br />
          <label className="red" id="monthly">
            Monthly: ${monthly}
          </label>
          <br />
        </div>
      </div>
    </>
  );
}

//export component
export default Checkout;
