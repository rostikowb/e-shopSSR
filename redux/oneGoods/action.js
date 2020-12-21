import {AUTH_USERAGENT, CHANGE_COMMENTS_MODAL, COMMENTS_ERROR, PRODUCT, SET_IMG, UD_COMMENT,} from "../types";
import {req} from "../req";

export const imgOnShowSet = (img) => {
  return {type: SET_IMG, img: img};
};
export const fetchAllGoodsId = async () => req("/goods/getAllGoodsId");

export const fetchOneGoods = (urlId, isLoad = true, data) => {
  return async (dispatch) => {
    let res = isLoad ? await req("/goods/" + urlId) : data;

    dispatch({
      type: PRODUCT,
      payload: res,
    });
  };
};

export const fetchOneGoodsSSR = async (urlId, dispatch, productUrl = null) => {
  let res = await req("/goods/" + urlId);

  dispatch({
    type: AUTH_USERAGENT,
    userAgent: null,
  });

  dispatch({
    type: PRODUCT,
    payload: res,
    productUrl,
  });
};

export const addComments = (body, token, goodsId, boughtId, boughtIndex) => {
    body.goodsId = goodsId;
    body.boughtId = boughtId;

  const header = {authorization: token}

  // console.log(boughtIndex);

  return async (dispatch) => {
    dispatch({
      type: COMMENTS_ERROR,
      msg: null,
    });
    let res = await req("/goods/addComment", {body, header});


    if (res["invalid"]) {
      dispatch({
        type: COMMENTS_ERROR,
        msg: res["msg"],
      });
    } else {
      dispatch({
        type: PRODUCT,
        payload: res["oneGoods"],
      });
      dispatch({
        type: UD_COMMENT,
        // id: res["oneGoods"]["_id"],
        gIndex: res["gIndex"],
        bIndex: boughtIndex,
      });
      dispatch({type: CHANGE_COMMENTS_MODAL});
    }
  };
};
