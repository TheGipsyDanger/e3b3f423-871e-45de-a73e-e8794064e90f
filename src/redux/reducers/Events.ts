import { createSlice, current } from "@reduxjs/toolkit";
import { IEvent, IParticipant, defineTypes, useDate } from "@/utils";

const Type = defineTypes("Events");

interface IEventsState {
  events: IEvent[];
}

const initialState: IEventsState = {
  events: [],
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
    [Type.addParticipant]: (state, { payload }) => {
      console.log("Adicionando");

      let stateToUse: IEventsState = JSON.parse(JSON.stringify(state));

      const indexToEventToUse = stateToUse.events.findIndex(
        ({ id }) => id === payload.eventId
      );

      stateToUse.events[indexToEventToUse].participants.push(
        payload.participant
      );

      return {
        ...state,
        events: stateToUse.events,
      };
    },
    [Type.editParticipant]: (state, { payload }) => {
      console.log("EDITANDO");
      let stateToUse: IEventsState = JSON.parse(JSON.stringify(state));

      const indexToEventToUse = stateToUse.events.findIndex(
        ({ id }) => id === payload.eventId
      );

      const indexToParticipantToUse = stateToUse.events[
        indexToEventToUse
      ].participants.findIndex(({ id }) => id === payload.participant.id);

      stateToUse.events[indexToEventToUse].participants[
        indexToParticipantToUse
      ] = { ...payload.participant };

      return {
        ...stateToUse,
      };
    },
    [Type.deleteEvent]: (state, { payload }) => {
      return {
        ...state,
        events: state.events.filter((event) => event.id !== payload.id),
      };
    },
    [Type.deleteParticipant]: (state, { payload }) => {
      let stateToUse: IEventsState = JSON.parse(JSON.stringify(state));

      const indexToEventToUse = stateToUse.events.findIndex(
        ({ id }) => id === payload.eventId
      );

      stateToUse.events[indexToEventToUse].participants = stateToUse.events[
        indexToEventToUse
      ].participants.filter(
        (participant) => participant.id !== payload.participantId
      );

      return {
        ...stateToUse,
      };
    },
  },
});

export default Events.reducer;
