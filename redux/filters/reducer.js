import {FILTER_ARR, FILTER_ARR_TO_STORE} from "../types";

const initialState = {
  filtersAllObj: {},
  priceRange: {}
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ARR:
      state.filtersAllObj = action.prm;
      state.priceRange = action.range;
      return {...state};

    default:
      return state;
  }
};
