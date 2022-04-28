import VersionSelection from "./VersionSelection";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });

test("should render version selection with 2 sub items", () => {
  const initialState = {
    songs: {
      version: "v1",
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const { getByRole, getByTestId } = render(
    <Provider store={store}>
      <VersionSelection />
    </Provider>
  );

  const root = getByRole("root");
  const subRoot = getByRole("sub-root");
  const childV1 = getByTestId("child-v1");
  const childV2 = getByTestId("child-v2");

  expect(root).toContainElement(subRoot);
  expect(subRoot).toContainElement(childV1);
  expect(subRoot).toContainElement(childV2);
});
