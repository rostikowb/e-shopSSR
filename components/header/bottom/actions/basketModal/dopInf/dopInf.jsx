import React from "react";
import Link from 'next/link'
import s from "./dopInf.module.css";
import ss from "../../../../../pages/GoodsArr/goodsCard/basket/cardBasket.module.css";
import {useRouter} from "next/router";

export const SumInf = (props) => {
  let count = props.data[0];
  let sum = props.data[1];
  let deliv = Math.round(60 + sum * 0.02).toLocaleString("ru-RU");
  const locale = useRouter().locale;

  return (
    <div className={s.suma}>
      {/*<div className={s.sumaInBox}>*/}
      <span className={s.countSum}>
        {count} шт. = <span className={s.red}>&nbsp;{sum}&nbsp;</span> грн.
      </span>
      <ul className={s.deliv}>
        <span
          className={s.delivTitle}>{locale === "ru" ? "Расчетная стоимость доставки" : "Розрахункова вартість доставки"}</span>
        {/*<li>*/}
        {/*  <span>При оплате картой: </span>*/}
        {/*  <b>~40 грн.</b>*/}
        {/*</li>*/}
        <li>
          <span>{locale === "ru" ? "Послеоплатой" : "Післяплатою"}</span>
          <b>~{deliv} грн.</b>
        </li>
      </ul>
      {/*Количество: <span>{count}</span>В суме:*/}
      {/*<span>{sum.toLocaleString("ru-RU")}</span>*/}
      {/*</div>*/}
      <div className={s.MobileSuma}>
        <span>
          {locale === "ru" ? "Товара на" : "Товару на"} <b>{sum}</b>грн.
        </span>
        <span>
          Доставка <b>40-{deliv}</b>грн.
        </span>
      </div>
      <div className={s.sumaBtnBox}>
        <span className={s.sumaBtn + " " + ss.cardBoxAll}>
          <Link href={`/checkout`} as={`/checkout`} passHref><a href="">{locale === "ru" ? "Оформить заказ":"Оформити замовлення"}</a></Link>
        </span>
      </div>
    </div>
  );
};
