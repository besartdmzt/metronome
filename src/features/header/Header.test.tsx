import Header from "./Header";
import { Typography } from "@mui/material";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("contains text element", () => {
  const component = shallow(<Header />);
  expect(component.find(Typography)).toHaveLength(1);
});
