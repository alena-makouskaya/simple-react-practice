import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    <div className="App">
      <OnOff />
      

      <UncontrolledAccordion titleValue="Menu"/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle rendering");
  return <h2>{props.title}</h2>;
}

export default App;
