import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button onClick={() => setCollapsed(!collapsed)}> + </button>
      {collapsed === false && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3>{props.title}</h3>;
}
function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
