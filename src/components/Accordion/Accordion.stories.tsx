
import  { action} from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";


export default {
  component: Accordion,
};

const callback = action('onChange')
const onClickCallback = action('Some Items was clicked')

export const MenuCollapsedMode = () => {
  return (
    <Accordion
      titleValue={"Menu"}
      collapsed={true}
      onChange={callback}
      onClick={onClickCallback}
      items={[{title: "Alex",value: 1}, {title: "Bob",value: 2}, {title: "Tom",value: 3},]}
    />
  );

};

export const UsersUncollapsedMode = () => {
  return (
    <Accordion
      titleValue={"Users"}
      collapsed={false}
      onChange={callback}
      onClick={onClickCallback}
      items={[{title: "Alex",value: 1}, {title: "Bob",value: 2}, {title: "Tom",value: 3},]}
    />
  );
};

export const ModeChanging = () => {
  let [value, setValue] = useState<boolean>(false);

  return (
    <Accordion
      titleValue={"Users"}
      collapsed={value}
      onChange={() => setValue(!value)}
      onClick={onClickCallback}
      items={[{title: "Alex",value: 1}, {title: "Bob",value: 2}, {title: "Tom",value: 3},]}
    />
  );
};
