import { CATEGORIES_ACTIOM_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTIOM_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
