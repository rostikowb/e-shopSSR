import {FILTER_ARR} from "../types";
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
