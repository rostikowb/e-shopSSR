import {
  AUTH_CLEAR_MSG,
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_FEEDBACK_MODAL,
  CHANGE_LIKE_MODAL, CHANGE_MENU_DRAWER, FORM_CHANGE,
  TICKET_DONE,
} from "../types";

export const changeStateAuthModal = () => {
  return (dispatch)=>{
    dispatch({type: FORM_CHANGE, form: 'L'});
    dispatch({type: AUTH_CLEAR_MSG})
    dispatch({type: CHANGE_AUTH_MODAL})
  };
};

export const changeStateCatalogModal = () => {
  return {
    type: CHANGE_CATALOG_MODAL,
  };
};

export const changeStateLikeModal = () => {
  return {
    type: CHANGE_LIKE_MODAL,
  };
};

export const changeStateBasketModal = () => {
  return {
    type: CHANGE_BASKET_MODAL,
  };
};

export const changeStateCommentsModal = () => {
  return {
    type: CHANGE_COMMENTS_MODAL,
  };
};

export const changeStateFeedbackModal = () => {
  return (dispatch) => {
    dispatch({ type: TICKET_DONE });
    dispatch({ type: CHANGE_FEEDBACK_MODAL });
  };
};
export const changeStateMenuDrawer = (bool) => {
  return { type: CHANGE_MENU_DRAWER, payload: bool}
};