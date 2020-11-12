import React from "react";
import s from "./goodsSideBar.module.css";
import {GoodsBlock} from "./goodsBlock/goodsBlock";
import {connect} from "react-redux";
import {useRouter} from "next/router";

export const GoodsSideBa = (props) => {
  let loc = useRouter().query?.onegoods?.split("__")[0].split("/")[2];

  return (
    <div className={s.goodsArrBox}>
      {props.arr && props.arr.length
        ? <><span className={s.sideBarTitle}>Вы недавно смотрели</span>
          <div className={s.goodsArrInBox}>
            {props.arr.map((item) => (
              <GoodsBlock key={item._id} data={item} loc={loc}/>
            ))}

          </div>
        </> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    arr: state.oneGoods.visitedArr,
    product: state.oneGoods.product,
  };
};

export const GoodsSideBar = connect(mapStateToProps, null)(GoodsSideBa);
