import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIOM_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTIOM_TYPES.SET_CATEGORIES, categoriesArray);
