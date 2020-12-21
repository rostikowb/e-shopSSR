import React from "react";
import LazyLoad from "react-lazyload";
import {Paper} from '@material-ui/core';
import s from "./goodsCard.module.css";
import {Img} from "./img/img";
import {Title} from "./title/title";
import {RatingBox} from "./rating/rating";
import {PriceBox} from "./price/price";
import {InStock} from "./inStock/inStock";
import {CardLikeBox} from "./like/cardLike";
import {CardBasketBox} from "./basket/cardBasket";
import {ShortHaractBox} from "./shortHaract/shortHaract";
import {useRouter} from 'next/router'
import cyrillicToTranslit from "cyrillic-to-translit-js";

export const GoodsCard = (props) => {
  const dt = props.data[0];
  const isLike = props.data[1];
  const dvnld = props.data[2];
  const loc = useRouter().pathname.split("__")[0].split("/")[2];
  const translit = new cyrillicToTranslit()
  const link = dt._id + "__" + translit.transform(dt["nm"].replace(/[^a-zа-яё\d]/ig, '_'));

  // console.log(dt["nm"].replace(/[^a-zа-яё\d]/uig, '_'), dt["nm"]);
  // console.log('МаМагнитный кабель Baseus Zinc Magnetic Micro 2A 1m Red'.replace(/[^a-zа-яё\d]/ig, '_'));

  return (
    <Paper className={!isLike ? s.cardBox : s.cardBoxLite} elevation={3}>
      <div className={s.goodsInner}>
        <div className={s.top}>
          <LazyLoad once height={200} offset={100}>
            <Img
              data={{
                data: dt,
                link: link,
                download: dvnld,
              }}
              loc={loc}
            />
          </LazyLoad>
          <Title
            data={{
              data: dt,
              link: link,
              download: dvnld,
            }}
            loc={loc}
          />
          <RatingBox data={dt} link={link}/>
        </div>

        <div className={s.bottom}>
          <PriceBox price={[dt["rtlPrc"], dt["dscnt"]]}/>
          <InStock stock={dt["stck_qntt"]}/>
        </div>
        <div className={s.underInfo}>
          <ShortHaractBox id={dt._id} param={dt["prm"]}/>
        </div>
        {dt["stck_qntt"] > 0 ? null : <div className={s.notAval}/>}
      </div>
      <CardLikeBox data={dt}/>
      {dt["stck_qntt"] > 0 ? <CardBasketBox data={dt}/> : null}
    </Paper>
  );
};
