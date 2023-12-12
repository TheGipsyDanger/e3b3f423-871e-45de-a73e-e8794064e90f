import * as InitalActions from "@/redux/actions/InitialActions";
import * as EventsActions from "@/redux/actions/EventsActions";

const actionsOptions = {
  Initial: InitalActions,
  Events: EventsActions,
};

export const defineTypes = (key: keyof typeof actionsOptions) => {
  const actions = actionsOptions[key];

  type ActionKeys =
    | keyof typeof actionsOptions.Initial
    | keyof typeof actionsOptions.Events;

  type ActionObject = {
    [K in ActionKeys]: K;
  };

  return Object.keys(actions).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: curr,
    };
  }, {} as ActionObject);
};
