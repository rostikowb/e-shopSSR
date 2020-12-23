import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_FEEDBACK_MODAL,
  CHANGE_LIKE_MODAL, CHANGE_MENU_DRAWER,
} from "../types";

const initialState = {
  auth: false,
  catalog: false,
  like: false,
  basket: false,
  comments: false,
  feedback: false,
  menu: false,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_MODAL:
      return { ...state, auth: !state.auth };
    case CHANGE_CATALOG_MODAL:
      return { ...state, catalog: !state.catalog };
    case CHANGE_LIKE_MODAL:
      return { ...state, like: action.do };
    case CHANGE_BASKET_MODAL:
      return { ...state, basket: action.do };
    case CHANGE_COMMENTS_MODAL:
      return { ...state, comments: !state.comments };
    case CHANGE_FEEDBACK_MODAL:
      return { ...state, feedback: !state.feedback };
    case CHANGE_MENU_DRAWER:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};
