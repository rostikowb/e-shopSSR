import React from "react";
import {initializeStore} from "../../../redux/store";
import {Goods} from "../../../components/pages/goods/goods";
import {fetchOneGoodsSSR} from "../../../redux/oneGoods/action";
import {option} from "../../../option";


const onegoods = () => {
    return (<Goods/>)
};

export default onegoods;

export async function getServerSideProps(context) {
        // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {
        // console.log(context.req.url);
        const reduxStore = initializeStore();
        const {dispatch} = reduxStore;
        const userAgent = context.req.headers["user-agent"];
        const url = context.req.url;
        const productId = context.query.onegoods.split("__")[0];
        await fetchOneGoodsSSR(productId, userAgent, dispatch, url);

        return {props: {initialReduxState: reduxStore.getState()}}
    // }else {
    //     return{props:{}}
    // }
}