import React from "react";
import s from "./goodsBlock.module.css";
import { RatingBox } from "../../../pages/GoodsArr/goodsCard/rating/rating";
import { PriceBox } from "../../../pages/GoodsArr/goodsCard/price/price";
import Link from 'next/link';
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../redux/oneGoods/action";
import { option } from "../../../../option";
import cyrillicToTranslit from "cyrillic-to-translit-js";

export const GoodsBloc = (props) => {
  const productId = props.loc;
  const d = props.data;
  const translit = new cyrillicToTranslit()
  const link = d._id + "__" + translit.transform(d["nm"].replace(/[^a-zа-яё\d]/ig, '_'));

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
          <Link href={"/goods/[catalog]/[onegoods]"} as={`/goods/${d["ctgrId"]}/${link}`} shallow={true} passHref={true}>
              <a onClick={() => chaProd()} className={s.imgBox} >
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
                          alt={`Ссылка на просмотренный товар ${d["nm"]}`}
                      />
                  </picture>
              </a>
          </Link>
      <Link href={"/goods/[catalog]/[onegoods]"} as={`/goods/${d["ctgrId"]}/${link}`} shallow={true} passHref={true}>
          <a><span onClick={() => chaProd()}>{d["nm"]}</span></a>
      </Link>
      <RatingBox data={d} link={link} />
      <PriceBox price={[d["rtlPrc"], d["dscnt"], true]} />
    </div>
  );
};

export const GoodsBlock = connect(null, { fetchOneGoods })(GoodsBloc);
