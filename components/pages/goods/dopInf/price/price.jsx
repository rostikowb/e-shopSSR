import React from "react";
import s from "./price.module.css";
import {useRouter} from "next/router";

export const OGPrice = (props) => {
  const price = props.price[0];
  const mainPrice = Math.round(Number(price)).toLocaleString("ru-RU");
  const interest = props.price[1];
  const locale = useRouter().locale;

  let discount;
  if (interest) {
    discount = Math.round(
      Number(price) + (price / 100) * interest
    ).toLocaleString("ru-RU");
  }
  return (
    <div className={s.priceBox}>
      <div className={s.priceInBox}>
        {interest ? (
          <>
            <span className={s.oldPrice}>{discount}₴</span>
            <span className={s.newPrice}>{mainPrice}₴</span>
          </>
        ) : (
          <span className={s.price}>{mainPrice}₴</span>
        )}
      </div>
      {props.price[2] === "true" ? (
        <span className={s.avlbl + " " + s.avlblYes}>{locale === "ru" ?"В наличии" : "В наявності"}</span>
      ) : (
        <span className={s.avlbl + " " + s.avlblNo}>{locale === "ru" ?"Нет в наличии" : "Немає в наявності"}</span>
      )}
    </div>
  );
};
