import songsReducer, {
  changeBpmValue,
  selectVersion,
  SongsState,
} from "./songs-slice";

describe("songsReducer reducer sync actions", () => {
  const initialState: SongsState = {
    version: "v1",
    selectedBpm: 72,
    filteredSongs: [
      { name: "Bohemian Rhapsody", artist: "Queen", bpm: 72 },
      { name: "Rap God", artist: "Eminem", bpm: 72 },
    ],
    songs: [
      { name: "Bohemian Rhapsody", artist: "Queen", bpm: 72 },
      { name: "Rap God", artist: "Eminem", bpm: 72 },

      { name: "The Scientist", artist: "Coldplay", bpm: 74 },
      { name: "Sultans of Swing", artist: "Dire Straits", bpm: 74 },

      { name: "High Hopes", artist: "Panic! at the Disco", bpm: 82 },
      { name: "Take Me Home, Country Roads", artist: "John Denver", bpm: 82 },

      { name: "Zombie", artist: "The Cranberries", bpm: 84 },
      { name: "Till I Collapse", artist: "Eminem", bpm: 84 },

      { name: "Orion", artist: "Metallica", bpm: 128 },
      { name: "Sweet Child o' Mine", artist: "Guns N' Roses", bpm: 128 },

      { name: "Beat It", artist: "Michael Jackson", bpm: 138 },
      { name: "Viva la Vida", artist: "Coldplay", bpm: 138 },
    ],
  };

  it("should handle initial state", () => {
    expect(songsReducer(undefined, { type: "unknown" })).toEqual({
      ...initialState,
    });
  });

  it("should select version", () => {
    const actual = songsReducer(initialState, selectVersion("v1"));
    expect(actual.version).toEqual("v1");
  });

  it("should change bpm value", () => {
    const actual = songsReducer(initialState, changeBpmValue(74));
    expect(actual.selectedBpm).toEqual(74);
    expect(actual.filteredSongs).toEqual([
      { name: "The Scientist", artist: "Coldplay", bpm: 74 },
      { name: "Sultans of Swing", artist: "Dire Straits", bpm: 74 },
    ]);
  });
});
