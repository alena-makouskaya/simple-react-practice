import { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  let [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      {" "}
      <input value={value} onChange={onChange} /> {value}{" "}
    </div>
  );
};

export const GetValueOfUnControlledInput = () => {
  let [value, setValue] = useState("");
  let inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;

    setValue(el.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={save}> Save </button> - actual values: {value}
    </div>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.value);

  return (
    <input
      value={parentValue}
      onChange={onChange}
      // onChange={action("Want to change")}
    />
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.checked);

  return (
    <input
      type="checkbox"
      checked={parentValue}
      onChange={onChange}
      // onChange={action("Want to change")}
    />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("1");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return (
    <select value={parentValue} onChange={onChange}>
      <option> - none -</option>
      <option value={"1"}> - Minsk -</option>
      <option value={"2"}> - Moscow -</option>
      <option value={"3"}> - Kiev -</option>
    </select>
  );
};

export const ControlledInputWithFixedValue = () => {
  return <input value={"Enter some value"} />;
};
