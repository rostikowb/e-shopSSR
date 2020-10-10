import {
  CLEAR_CATALOG,
  FETCH_GOODS,
  FETCH_GOODS_PAGES,
  SET_CATALOG, SET_WIDTH,
  STUB_ON,
  STUB_ON_P,
  THIS_URL,
} from "../types";

const initialState = {
  isFirstL: true,
  currGoods: [],
  catalog: null,
  stub: true,
  stubP: false,
  url: "",
  sort: "byRating",
  width: 0,
};

export const AllGoodsR = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
        // console.log(action.payload.length);
        if (action.sort) state.sort = action.sort;
      state.isFirstL = false;
      state.currGoods = action.payload;
      state.catalog = action.catalog;
      state.stub = false;
        return { ...state };

      case FETCH_GOODS_PAGES:
      state.currGoods = [...state.currGoods, ...action.payload];
      state.catalog = action.catalog;
      state.stub = false;
      state.stubP = false;
      state.isFirstL = false;
      return { ...state };

    case CLEAR_CATALOG:
      state.currGoods = action.payload;
      state.catalog = null;
      state.isFirstL = false;
      return { ...state };

    case STUB_ON:
      state.stub = true;
      return { ...state };

    case STUB_ON_P:
      state.stubP = true;
      return { ...state };

    case SET_CATALOG:
      state.catalog = action.catalog;
      return { ...state };

    case THIS_URL:
      state.url = action.url;
      state.stub = false;
      state.isFirstL = false;
      return { ...state };

    case SET_WIDTH:
      state.width = action.width;

      return { ...state };
    default:
      return state;
  }
};
