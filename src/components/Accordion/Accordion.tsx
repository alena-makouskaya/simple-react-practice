import { MouseEvent } from "react";

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <h3 onClick={(e: MouseEvent<HTMLHeadingElement>) => props.onChange()}>
      {props.title}
    </h3>
  );
}

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void
};

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody rendering");
  return <ul>
    {
      props.items.map ((i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>)
    }
  </ul>
}
