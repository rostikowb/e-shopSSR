import React, { useEffect } from "react";
import s from "./goods.module.css";
import { connect } from "react-redux";
import {useRouter} from 'next/router'
import {fetchOneGoods, imgOnShowSet} from "../../../redux/oneGoods/action";
import { setCatalog } from "../../../redux/goodsArr/actions";
import { Imgs } from "./imgs/imgs";
import { DopInf } from "./dopInf/dopInf";
import { DescChar } from "./descChar/descChar";
import { CommentBox } from "./commentBox/commentBox";
import {set} from "../../../localStorage/localStorFunc";
import {lsToStore} from "../../../localStorage/initAction";
// import cyrillicToTranslit from "cyrillic-to-translit-js";
// console.log(cyrillicToTranslit().transform("Привет Мир!"));

// function useLoc() {
//   return {
//     query: new URLSearchParams(useLocation().search),
//     path: useParams(),
//   };
// }

const Good = (props) => {
  let loc = useRouter();
  let catalog = loc.query.catalog;
  let productId = loc.query.onegoods.split("__")[0];

  const loadOneGoods = () => {
    props.setCatalog(catalog);
    // props.fetchOneGoods(productId);
  };
  useEffect(() => {
    props.lsToStore();
      // if(!props.product || props.product._id !== productId){
      //     loadOneGoods();
      // }
  }, [productId]);

  return (
    <div className={s.goodsBox}>
      {props.product ? (
        <>
          <div className={s.goodsInfo}>
            <Imgs data={props.product} />
            <DopInf data={props.product} />
          </div>
          <div className={s.descCharComBox}>
            <DescChar data={[props.product.dscrptn, props.product.prm]} />
            <CommentBox />
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.oneGoods.product,
      visitedArr: state.oneGoods.visitedArr,
  };
};

export const Goods = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
    lsToStore,
    imgOnShowSet
})(Good);
