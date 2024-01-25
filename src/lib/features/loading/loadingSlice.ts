import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface loadingState {
  isLoading: boolean;
}

const initialState = { isLoading: false } as loadingState;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
