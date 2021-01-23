import React from "react";
import {fetchGoodsSearchSSR, fetchGoodsSSR} from "../../../redux/goodsArr/actions";
import {FETCH_GOODS} from "../../../redux/types";
import {initializeStore} from "../../../redux/store";
import {GoodsArr} from "../../../components/pages/GoodsArr/goodsArr";
import {fetchFilterArrSSR} from "../../../redux/filters/actions";
import {parsFiltOfUrl} from "../../../components/dopComp/lib/filters/parsFiltOfURL";

const catalog = () => {
  return (<GoodsArr/>)
};

export default catalog;

export async function getServerSideProps(context) {
  const query = context.query;
  const locale = context.req.cookies['NEXT_LOCALE']
  const reduxStore = initializeStore();
  const {dispatch} = reduxStore;
  const userAgent = context.req.headers["user-agent"];
  const catalog = query?.catalog

  const selecFilterArr = parsFiltOfUrl(query)

  if(catalog) await fetchFilterArrSSR(query?.catalog, dispatch)

  if (query?.search) {
    await fetchGoodsSearchSSR(query.search, dispatch, catalog)
  } else {
    await fetchGoodsSSR({
      type: FETCH_GOODS,
      catalog: query?.catalog,
      sort: query?.sort,
      page: query?.page,
      filters: selecFilterArr,
      // range,
      userAgent,
      dispatch
    });
  }
  return {props: {initialReduxState: reduxStore.getState()}}
}