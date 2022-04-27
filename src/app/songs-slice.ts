import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Songs } from "src/models/Songs";

export interface SongsState {
  selectedBpm: number;
  songs: Songs[];
  filteredSongs: Songs[];
}

const initialState: SongsState = {
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

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    changeBpmValue: (state, action: PayloadAction<number>) => {
      state.selectedBpm = action.payload;
      state.filteredSongs = state.songs.filter(
        (song) => action.payload === song.bpm
      );
    },
  },
});

export const { changeBpmValue } = songsSlice.actions;
export default songsSlice.reducer;
