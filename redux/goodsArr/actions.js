import {
  AUTH_USERAGENT,
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG, SET_WIDTH,
  THIS_URL,
} from "../types";
import bent from "bent";
import {option} from "../../option";

export const stubOn = (type) => {
  return {
    type: type.type,
  };
};
export const thisUrl = (url) => {
  return {
    type: THIS_URL,
    url: url,
  };
};

export const setCatalog = (catalog) => {
  return {
    type: SET_CATALOG,
    catalog: catalog,
  };
};

export const setWidthCard = (width) => {
  return {
    type: SET_WIDTH,
    width,
  };
};
let oldUrl;

export const fetchGoods = (props) => {
  return async (dispatch) => {
    let cat;
    cat = props.catalog ? "/" + props.catalog : "/";
    let page = props.page;
    let sort = props.sort ? props.sort : null;
    let url = option.api + cat + "?page=" + page + "&sort=" + sort;
    let isFetch;

    oldUrl = url;

    // dispatch({type: STUB_ON});
    isFetch = !page ? FETCH_GOODS : FETCH_GOODS_PAGES;
    const res = await bent(url, "json", "POST", 200)();

    let dispatchObj = {
      type: isFetch,
      catalog: props.catalog || null,
      payload: res,
    };

    if (sort) dispatchObj.sort = sort;
    await dispatch(dispatchObj);
  }

};
export const fetchGoodsSSR = async (props) => {
  let cat;
  let dispatch = props.dispatch;
  const userAgent = props.userAgent;

  cat = props.catalog ? "/" + props.catalog : "/";

  let page = props.page;
  let sort = props.sort ? props.sort : null;
  let url = option.api + cat + "?page=" + page + "&sort=" + sort;
  let isFetch;

  oldUrl = url;

  isFetch = !page ? FETCH_GOODS : FETCH_GOODS_PAGES;
  const res = await bent(url, "json", "POST", 200)();

  let dispatchObj = {
    type: FETCH_GOODS,
    catalog: props.catalog || null,
    payload: res,
  };

  dispatch({
    type: AUTH_USERAGENT,
    userAgent,
  });

  if (sort) dispatchObj.sort = sort;
  await dispatch(dispatchObj);
};