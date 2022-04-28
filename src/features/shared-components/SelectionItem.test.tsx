import { render } from "@testing-library/react";
import SelectionItem from "./SelectionItem";
import { Typography } from "@mui/material";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("contains text element with selected text", () => {
  const { getByTestId } = render(
    <SelectionItem
      value={10}
      text="Test"
      selected={true}
      onSelect={function (value: string | number): void {}}
    />
  );
  expect(getByTestId("selection-item-box")).toHaveTextContent("Test");
});

test("contains only one text element", () => {
  const component = shallow(
    <SelectionItem
      value={10}
      text="Test"
      selected={true}
      onSelect={function (value: string | number): void {}}
    />
  );
  expect(component.find(Typography)).toHaveLength(1);
});
