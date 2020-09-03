import React from "react";
import s from "./goodsBlock.module.css";
// import { RatingBox } from "../../../pages/GoodsArr/goodsCard/rating/rating";
import { PriceBox } from "../../../pages/GoodsArr/goodsCard/price/price";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../redux/oneGoods/action";
import { option } from "../../../../option";

export const GoodsBloc = (props) => {
  let productId = props.loc;
  let d = props.data;
  let link = d._id + "__" + d["nm"].replace(/\s/gi, "_").replace(/\//gi, "-");

  const chaProd = () => {
    if (d._id === productId) {
      window.scrollTo(0, 0);
    } else {
      props.fetchOneGoods(d._id, false, d);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={s.oneBlockBox}>
      <NavLink className={s.imgBox} to={`/${d["ctgrId"]}/${link}`}>
        <picture style={{ width: "100%" }}>
          <source
            className={s.imgOne}
            type="image/webp"
            srcSet={`${option.STATIC}/webp/${d._id}/${d.img[0]}-400.webp`}
          />
          <source
            className={s.imgOne}
            type="image/jpeg"
            srcSet={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
          />
          <img
            className={s.imgOne}
            src={`${option.STATIC}/jpeg/${d._id}/${d.img[0]}-400.jpeg`}
            alt=""
          />
        </picture>
      </NavLink>
      <NavLink to={`/${d["ctgrId"]}/${link}`}>
        <span onClick={() => chaProd()}>{d["nm"]}</span>
      </NavLink>
      {/*<RatingBox data={d} link={link} />*/}
      <PriceBox price={[d["rtlPrc"], d["dscnt"], true]} />
    </div>
  );
};

export const GoodsBlock = connect(null, { fetchOneGoods })(GoodsBloc);
