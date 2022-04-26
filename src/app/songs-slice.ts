import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Loading } from "src/models/Loading";
import { Songs } from "src/models/Songs";
import { getSongsService } from "src/services/songs-services";

export interface SongsState {
  selectedBpm: number;
  songs: Songs[];
  loading: Loading;
}

const initialState: SongsState = {
  selectedBpm: 72,
  songs: [],
  loading: Loading.UNINITIALIZED,
};

export const getSongs = createAsyncThunk(
  "songs/getSongs",
  async (bpm: number) => {
    const response = await getSongsService(bpm);
    return response.data;
  }
);

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    changeBpm: (state, action) => {
      state.selectedBpm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state) => {
        state.loading = Loading.LOADING;
        state.songs = [];
      })
      .addCase(getSongs.fulfilled, (state, action) => {
        state.loading = Loading.SUCCESS;
        state.songs = action.payload;
      })
      .addCase(getSongs.rejected, (state) => {
        state.loading = Loading.FAILED;
        state.songs = [];
      });
  },
});

export const { changeBpm } = songsSlice.actions;
export default songsSlice.reducer;
