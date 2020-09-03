import {
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG,
  THIS_URL,
} from "../types";
import bent from "bent";
import { option } from "../../option";

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

let oldUrl;

export const fetchGoods = async (props) => {
  let cat;
  const dispatch = props.dispatch;

    cat = props.catalog ? "/" + props.catalog : "/";
  // console.log(cat);
  let page = props.page;
  let sort = props.sort ? props.sort : null;
  let url = option.api + cat + "?page=" + page + "&sort=" + sort;
  let isFetch;

  oldUrl = url;
  //   dispatch({type:FETCH_GOODS});
  // return async () => {
  //     dispatch({type:FETCH_GOODS});
    isFetch = !page ? FETCH_GOODS : FETCH_GOODS_PAGES;
    const res = await bent(url, "string", "POST", 200)();

    let dispatchObj = {
      type: isFetch,
      catalog: props.catalog||null,
      payload: JSON.parse(res),
    };

    if (sort) dispatchObj.sort = sort;
      await dispatch(dispatchObj);
  // };
};
