import React, {useEffect} from "react";
import s from "../../../styles/goodsArr.module.css";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../redux/goodsArr/actions";
import {StubArr} from "./stubArr/stubArr";
import {GoodsArrLoad} from "./goodsArrLoad/goodsArrLoad";
import {useRouter} from 'next/router'
import {lsToStore} from "../../../localStorage/initAction";
import {CatalogHeads} from "./catalogHeads";
// import Head from "next/head";

const GoodsAr = (props) => {
  const loc = useRouter();
  const catalog = props.catalog;

  useEffect(() => {
    props.lsToStore();
  }, [loc.pathname]);

  return (
    <div className={s.goodsArr}>
      {catalog ? <CatalogHeads catalog={catalog}/> : null}
      <ul className={s.goodsBox}>
        {/*Підгружені карточки товару*/}
        {!props.stub && !props.stub ? <GoodsArrLoad/> : null}

        {/*Заглушка*/}
        {props.stubP || props.stub ? <StubArr/> : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stub: state.AllGoodsR.stub,
    stubP: state.AllGoodsR.stubP,
    catalog: state.AllGoodsR.catalog
  };
};

export const GoodsArr = connect(mapStateToProps, {
  stubOn,
  lsToStore
})(GoodsAr);
