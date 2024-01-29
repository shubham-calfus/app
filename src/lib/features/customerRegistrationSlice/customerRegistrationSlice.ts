import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  [title: string]: {
    [childTitle: string]: boolean;
  };
}

const initialState: StepState = {};

const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    markStepAsCompleted: (
      state,
      action: PayloadAction<{ title: string; childTitle: string }>
    ) => {
      const { title, childTitle } = action.payload;
      if (!state[title]) {
        state[title] = {};
      }
      state[title][childTitle] = true;
    },
  },
});

export const { markStepAsCompleted } = stepSlice.actions;
export default stepSlice.reducer;
