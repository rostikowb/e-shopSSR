import React, {useEffect} from "react";
import {fetchGoodsSearch, fetchGoodsSearchSSR, fetchGoodsSSR} from "../redux/goodsArr/actions";
import {FETCH_GOODS} from "../redux/types";
import {initializeStore} from "../redux/store";
import {GoodsArr} from "../components/pages/GoodsArr/goodsArr";
import {option} from "../option";

const main = () => {
  return (<GoodsArr/>)
};

export default main;

export async function getServerSideProps(context) {
  // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {
  const query = context.query;
  const reduxStore = initializeStore();
  const {dispatch} = reduxStore;
  const userAgent = context.req.headers["user-agent"];

  if(query?.search){
    await fetchGoodsSearchSSR(query.search, dispatch)
  } else {
    await fetchGoodsSSR({
      type: FETCH_GOODS,
      sort: query?.sort,
      page: query?.page,
      userAgent,
      dispatch
    });
  }
  return {props: {initialReduxState: reduxStore.getState()}}
  // } else {
  //     return {props: {}}
  // }
}