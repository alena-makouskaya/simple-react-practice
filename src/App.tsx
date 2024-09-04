import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingPropsType, RatingvalueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingvalueType>(0)
  let [accordionCollapsed, setAccordionСollapsed] = useState<boolean>(true)

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>

      <div> - / - / - / - / - / - / - / - </div>
      <UncontrolledRating />

      <Accordion titleValue="Accordion" collapsed={accordionCollapsed}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle rendering");
  return <h2>{props.title}</h2>;
}

export default App;
