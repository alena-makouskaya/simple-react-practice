
import  { action} from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";


export default {
  component: Accordion,
};

const onChangeHandler= action('onChange')

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={() => {}}
    />
  );
};

export const ExpandedAccordion = () => {
  return (
    <Accordion
      titleValue={"Expanded Accordion"}
      collapsed={false}
      onChange={() => {}}
    />
  );
};

export const AccordionDefault = () => {
  let [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      titleValue={"Accordion Default"}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
