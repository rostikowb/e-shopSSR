import bent from "bent";
import { SUM_BASKET } from "../types";
import { option } from "../../option";

export const addProdToCash = (urlId, type, isLoad = true, data) => {
  let url = option.api + "/goods/" + urlId;
  let res;
  return async (dispatch) => {
    try {
      res = isLoad
        ? JSON.parse(await bent(url, "string", "POST", 200)())
        : data;
    } catch (e) {
      res = data;
    }

    dispatch({
      type: type,
      payload: res,
    });
  };
};
export const delProdToCash = (type, data) => {
  return async (dispatch) => {
    dispatch({
      type: type,
      payload: data,
    });
  };
};
export const sumProdToCash = (data, plus) => {
  return async (dispatch) => {
    dispatch({
      type: SUM_BASKET,
      payload: data,
      plus: plus,
    });
  };
};
