import React from "react";
import { connect } from "react-redux";
import s from "../../../../styles/goodsArr.module.css";
import { GoodsCard } from "../goodsCard/goodsCard";
import { NextBtnCard } from "../nextBtnCard/nextBtnCard";
import {useRouter} from "next/router";

const GoodsArrLoa = (props) => {
  const goods = props.currGoods;
  let loc = useRouter()?.query?.search;

  return (
    <>
      {/*Кількість блоків повинна бути кратна ---29---*/}
      {goods.length?goods.map((value) => (
        <li className={s.goodsElem} key={value["_id"]+'GCa'}>
          <GoodsCard data={[value]} />
        </li>
      )):<h2 className={s.goodsNotFound}>Товар не найден :( Попробуйте изменить критерии.</h2>}
      {!props.stubP && goods.length >= 29 &&(!!goods.length && !loc)  ? <NextBtnCard /> : null}
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