import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <AppTitle title={"This is APP component 01"} />
      <AppTitle title={"This is APP component 02"} />

      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={0} />
      <Accordion />
    </div>
  );
}

function AppTitle(props: any) {
  console.log("AppTitle rendering");
  return <h2>{props.title}</h2>;
}

export default App;
