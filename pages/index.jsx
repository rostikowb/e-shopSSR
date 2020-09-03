import React from "react";
import {fetchGoods} from "../redux/goodsArr/actions";
import {FETCH_GOODS} from "../redux/types";
import {initializeStore} from "../redux/store";
import {GoodsArr} from "../components/pages/GoodsArr/goodsArr";
import {Header} from "../components/header/header";
import s from "../styles/goodsArr.module.css"
import {UpperBar} from "../components/dopComp/upperBar/upperBar";
import {GoodsSideBar} from "../components/dopComp/goodsSideBar/goodsSideBar";
export default () => {
    return (
        <>
            <Header/>
            <div className="main">
                <div className={s.leftSidebarBox}>
                    <Sidebar/>
                </div>
                <div className={s.rightMain}>
                    <UpperBar name={undefined}/>
                    <GoodsArr/>
                </div>
            </div>
            <GoodsSideBar/>
        </>
    )
};

export async function getServerSideProps(context) {
    const query = context.query;
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;
    await fetchGoods({
        type: FETCH_GOODS,
        sort: query?.sort,
        page: query?.page,
        dispatch
    });
    return {props: {initialReduxState: reduxStore.getState()}}
}