import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_FEEDBACK_MODAL,
  CHANGE_LIKE_MODAL, FETCH_GOODS, FILTER_ARR, FILTER_ARR_TO_STORE, FORM_CHANGE,
  TICKET_DONE,
} from "../types";
import bent from "bent";
import {option} from "../../option";
import {fetchFilter} from "./fetch";




export const fetchFilterArr = (ctgrId) => {

  return async (dispatch) => {

    const req = await fetchFilter(ctgrId)

    dispatch({
      type: FILTER_ARR,
      prm: req.prm[0],
      range: req.rangePrc,
    });
  }
}

export const fetchFilterArrSSR = async (ctgrId, dispatch) => {

  const req = await fetchFilter(ctgrId)

  dispatch({
    type: FILTER_ARR,
    prm: req.prm[0],
    range: req.rangePrc,
  });
}

// export const filterToStore = (selectArr) => {
//   // console.log(selectArr);
//   return {
//     type: FILTER_ARR_TO_STORE,
//     payload: selectArr
//   }
// }