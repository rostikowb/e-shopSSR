import {DEL_ALL_BASKET, SUM_BASKET} from "../types";
import {req} from "../req";

export const addProdToCash = (urlId, type, isLoad = true, data) => {
  let url = `/goods/${urlId}`;
  let res;
  return async (dispatch) => {
    try {
      res = isLoad ? JSON.parse(await req(url)) : data;
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
export const deleteAllBasket = () => {
  return {
    type: DEL_ALL_BASKET
  };
};