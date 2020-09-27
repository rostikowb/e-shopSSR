import React from "react";
import { connect } from "react-redux";
import s from "../../../../styles/goodsArr.module.css";
import { GoodsCard } from "../goodsCard/goodsCard";
import { NextBtnCard } from "../nextBtnCard/nextBtnCard";

const GoodsArrLoa = (props) => {
  const goods = props.currGoods;

    return (
    <>
      {/*Кількість блоків повинна бути кратна ---24---*/}
      {goods.length?goods.map((value) => (
        <li className={s.goodsElem} key={value["_id"]+'GCa'}>
          <GoodsCard data={[value]} />
        </li>
      )):null}
      {!props.stubP ? <NextBtnCard /> : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    catalog: state.AllGoodsR.catalog,
    stubP: state.AllGoodsR.stubP,
  };
};

export const GoodsArrLoad = connect(mapStateToProps, {})(GoodsArrLoa);