import SongsList from "./SongsList";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });
test("should render version selection with 2 sub items", () => {
  const initialState = {
    songs: {
      filteredSongs: [{ name: "Bohemian Rhapsody", artist: "Queen", bpm: 72 }],
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const { getByTestId } = render(
    <Provider store={store}>
      <SongsList />
    </Provider>
  );

  expect(getByTestId("songs-list-box")).toHaveTextContent(
    `${initialState.songs.filteredSongs[0].name} ${initialState.songs.filteredSongs[0].artist}`
  );
});
