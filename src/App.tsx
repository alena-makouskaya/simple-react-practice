import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTitle />

      <Rating />
      <Accordion />
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering")
  return <h2>This is APP component</h2>;
}

function Rating() {
  console.log("Rating rendering")
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  console.log("Star rendering")
  return <span>Star </span>
}

function Accordion() {
  console.log("Accordion rendering")
  return (
    <div>
      <h3>Menu</h3>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
