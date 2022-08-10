
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../server";

export interface Album {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

interface FetchResponse {
  data: [Album] | null,
  error: string | null
}

const InitialAlbum: Album = {
  albumId: 0,
  id: 0,
  title: "",
  url: "",
  thumbnailUrl: ""
}

const initialState = {
  isLoading: false,
  albums: [InitialAlbum]
}

export const photoQuery = createAsyncThunk<FetchResponse, void>("photoQuery", async () => {
  try {
    const result = await fetchPhotos();
    return {
      data: result.data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: "Something went wrong"
    }
  }
});

const photoSlice = createSlice({
  name: "photoQuery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(photoQuery.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(photoQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.albums = action.payload?.data;
    })
    builder.addCase(photoQuery.rejected, (state) => {
      state.isLoading = false;
    })
  }
})

export default photoSlice.reducer;
