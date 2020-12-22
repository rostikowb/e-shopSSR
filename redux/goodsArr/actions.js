import {
  AUTH_USERAGENT,
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG, SET_WIDTH,
  THIS_URL,
} from "../types";
import {req} from "../req";

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


export const fetchGoods = (props) => {
  return async (dispatch) => {
    const cat = props.catalog ? "/" + props.catalog : "/";
    const page = props.page;
    const filter = props.filter;
    const range = props.range;
    const sort = props.sort ? props.sort : null;
    const url = cat + "?page=" + page + "&sort=" + sort;
    const isFetch = !page ? FETCH_GOODS : FETCH_GOODS_PAGES;
    const body = {}

    if (filter) body.filter = filter;
    if (range) body.prcrange = range;

    const res = await req(url, {body});

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
  const cat = props.catalog ? "/" + props.catalog : "/";
  const dispatch = props.dispatch;
  const userAgent = props.userAgent;
  const page = props.page;
  const filter = props.filters;
  const range = props.range;
  const sort = props.sort ? props.sort : null;
  const url = cat + "?page=" + page + "&sort=" + sort;
  const body = {}

  if (filter) body.filter = filter;
  if (range) body.prcrange = range;
  console.log(url);
  const res = await req(url, {body});

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

export const fetchGoodsSearch = (words, catalog = false) => {
  return async (dispatch) => {
    const res = await req('/goods/search', {body: {words, catalog}});

    dispatch({
      type: FETCH_GOODS,
      payload: res.result || [],
    });
  }
}

export const fetchGoodsSearchSSR = async (words, dispatch, catalog = false) => {
  const res = await req('/goods/search', {body: {words, catalog}});
  dispatch({
    type: FETCH_GOODS,
    catalog: catalog || null,
    payload: res.result ? res.result : [],
  });

}
