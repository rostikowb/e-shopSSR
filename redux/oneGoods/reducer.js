import {contains, get, set} from "../../localStorage/localStorFunc";
import {COMMENTS_ERROR, PRODUCT, SET_IMG, VISIT_INIT} from "../types";

const addVisitedArr = (state, value) => {
    if (!contains(state, value)) {
        if (state.length > 6) {
            state.shift();
            return [...state, value];
        } else {
            return [...state, value];
        }
    } else {
        return state;
    }
};
// let visArr = get("goods/visited");
const initialState = {
    product: null,
    productUrl: null,
    imgOnShow: null,
    visitedArr: null,
    // visitedArr: visArr?.length ? visArr : set("goods/visited", ""),
    commErrMsg: null,
};

export const oneGoods = (state = initialState, action) => {
    switch (action.type) {
        case VISIT_INIT:
            if(!state.visitedArr) state.visitedArr = get("goods/visited");
            if(state.product){
                state.visitedArr = addVisitedArr(state.visitedArr, state.product);
                set("goods/visited", state.visitedArr);
            }

            return {...state};

        case PRODUCT:
            if(!action.payload) return {...state};
            if (typeof window !== 'undefined'){
                if(!state.visitedArr) state.visitedArr = get("goods/visited");
                state.visitedArr = addVisitedArr(state.visitedArr, action.payload);
            }

            if (action.payload && action.payload !== state.product)
                state.product = action.payload;
                state.imgOnShow = action.payload.img[0]
                if(action.productUrl) state.productUrl = action.productUrl;
            // state.imgOnShow = action.payload.img[0];
            state.commErrMsg = null;

            if (typeof window !== 'undefined'){
                set("goods/visited", state.visitedArr);
            }
            return {...state};

        case SET_IMG:
            if (state.imgOnShow !== action.img) state.imgOnShow = action.img;
            return {...state};

        case COMMENTS_ERROR:
            if (action.msg) state.commErrMsg = action.msg;
            return {...state};

        default:
            return state;
    }
};
