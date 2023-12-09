import { createSlice } from "@reduxjs/toolkit";
import { defineTypes } from "@/utils";

const Type = defineTypes("Initial");

interface IInitialState {
  state: string;
}

const initialState: IInitialState = {
  state: "",
};

const Initial = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    [Type.setStatus]: (_, { payload }) => {
      return {
        ...initialState,
        status: payload,
      };
    },
  },
});

export default Initial.reducer;
