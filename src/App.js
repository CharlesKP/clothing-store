//imports for all components, react & router + css file
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Legal from "./components/Legal";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import User from "./components/User";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  //routes created - header always visiable (ie. nav bar)
  //other routes surrounded with a switch and each route has
  //it's own path + component to be loaded
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Legal" component={Legal} />
        <Route path="/Checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
