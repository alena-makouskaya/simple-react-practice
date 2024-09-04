import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import {
  Rating,
  RatingPropsType,
  RatingvalueType,
} from "./components/Rating/Rating";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
  let [ratingValue, setRatingValue] = useState<RatingvalueType>(0);
  let [accordionCollapsed, setAccordionСollapsed] = useState<boolean>(true);
  let [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue} />

      <div> - / - / - / - / - / - / - / - </div>
      <UncontrolledRating />

      <Accordion
        titleValue="Accordion"
        collapsed={accordionCollapsed}
        onChange={() => setAccordionСollapsed(!accordionCollapsed)}
      />

      <div> - / - / - / - / - / - / - / - </div>

      {/* <OnOff on={switchOn} onChange={setSwitchOn}></OnOff> */}
      <UncontrolledOnOff onChange={setSwitchOn}/>
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
