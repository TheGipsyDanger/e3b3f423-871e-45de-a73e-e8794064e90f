import { createSlice } from "@reduxjs/toolkit";
import { IEvent, defineTypes, useDate } from "@/utils";
import { events } from "@/mocks";

const Type = defineTypes("Events");

interface IEventsState {
  events: IEvent[];
}

const initialState: IEventsState = {
  events: [...events],
};

const Events = createSlice({
  name: "Events",
  initialState,
  reducers: {
    [Type.setEvent]: (state, { payload }) => {
      return {
        ...state,
        events: useDate().sortDate([...state.events, payload]),
      };
    },
  },
});

export default Events.reducer;
