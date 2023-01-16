import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "react-bootstrap/Button";
//import logo from '../images/logo header.jpg'
import logo from "../images/logo header.jpg";
import bigLogo from "../images/retro fashion crop.jpg";

//header component with sign in
//ficticious links
function Header(props) {
  //variables for sign in and appropriate link
  //const [currentLogo, setLogo] = useState(logo);
  const [status, setStatus] = useState(false);
  const [welcome, setWelcome] = useState("Sign In");

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  // if (!location) {
  //   setLogo(bigLogo);
  // }
  // console.log("location: " + location);

  const signIn = () => {
    // status = !status;

    // console.log(status);
    //if props value is true, change to welcome + link
    if (status === false) {
      setWelcome("Welcome!");
      setStatus(true);

      console.log(status);
      console.log(welcome);
    } else if (status === true) {
      setWelcome("Sign In");
      setStatus(false);

      console.log(status);
      console.log(welcome);
    }
  };
  //return header/logo/navbar
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="retro fashion"></img>
      <div className="navlinks">
        <Button className="sign btn btn-dark" onClick={signIn}>
          {welcome}
        </Button>

        <Navigation />
      </div>
    </div>
  );
}

//export component
export default Header;
