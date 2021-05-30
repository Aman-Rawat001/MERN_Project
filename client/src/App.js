import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home.js";
import About from "./component/About";
import Contact from "./component/Contact.js";
import Login from "./component/Login.js";
import Signup from "./component/Signup.js";
import ErrorPage from "./component/ErrorPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}
