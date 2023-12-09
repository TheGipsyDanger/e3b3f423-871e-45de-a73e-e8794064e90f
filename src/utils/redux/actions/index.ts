import * as InitalActions from "@/redux/actions/InitialActions";

const actionsOptions = {
  Initial: InitalActions,
};

export const defineTypes = (key: keyof typeof actionsOptions) => {
  const actions = actionsOptions[key];

  type ActionKeys = keyof typeof actions;

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
