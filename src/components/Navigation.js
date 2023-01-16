import { Link, useLocation } from "react-router-dom";
import React from "react";

//Landing component
function Navigation() {
  let navs = ["Home", "User", "Shop", "Checkout", "Legal"];

  //retrieve location path to get which page we're on;
  const path = useLocation().pathname;
  let location = path.split("/")[1];

  //location at home = ""
  if (!location) {
    location = "Home";
  }
  //remove the current location from the navs array
  navs.splice(navs.indexOf(location), 1);

  //function to populate Navigation
  function navUpdate(location) {
    let displayNow = [];

    //loop to push link objects onto displayNow
    for (var i in navs) {
      //if navs[i] == "home" then the to path needs to actually be '/' not '/Home'
      if (navs[i] == "Home") {
        displayNow.push(
          <Link key={navs[i]} to={"/"}>
            {navs[i]}
          </Link>
        );
        //else path is from array
      } else {
        displayNow.push(
          <Link key={navs[i]} to={"/" + navs[i]}>
            {navs[i]}
          </Link>
        );
      }
    }
    //setNavs(displayNow);

    return displayNow;
  }
  //return from function displays the navbar
  return <>{navUpdate(location)}</>;
}

//export component
export default Navigation;
