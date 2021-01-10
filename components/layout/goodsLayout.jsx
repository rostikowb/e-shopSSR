import React from "react";
import {GoodsSideBar} from "../dopComp/goodsSideBar/goodsSideBar";
import {Header} from "../header/header";
import {Sidebar} from "../sidebar/sidebar";
import {UpperBar} from "../dopComp/upperBar/upperBar";
import s from "../../styles/goodsArr.module.css"
import {InvisComp} from "../dopComp/invisComp/invisComp";
import {FiltersChecked} from "../dopComp/filtersChecked/filtersChecked";
import {FeedbackBtn} from "../menuContent/feedbackBtn/feedbackBtn";
import {useRouter} from "next/router";

export const GoodsLayout = ({children}) => {
  const loc = useRouter().pathname
  const isOneGoods = loc === '/goods/[catalog]/[onegoods]'

  return (
    <>
      <Header/>
      <div className="main">
        {!isOneGoods ? <div className={s.leftSidebarBox}>
          <Sidebar/>
        </div> : null}
        <div className={!isOneGoods ? s.rightMain : s.rightMainGoods}>
          <UpperBar name={undefined}/>
          <FiltersChecked/>
          {children}
          <FeedbackBtn/>
        </div>
      </div>
      <GoodsSideBar/>
      <InvisComp/>
    </>
  );
};