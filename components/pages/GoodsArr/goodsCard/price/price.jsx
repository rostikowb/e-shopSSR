import s from "./price.module.css";
import React from "react";

export const PriceBox = (props) => {
  // console.log(props.rtlPrc);
  const price = props.price[0];
  const mainPrice = Math.round(Number(price)).toLocaleString("ru-RU");
  const interest = props.price[1];
  const sty = props.price[2];
  const style = {
    flexDirection: sty ? "row" : "column",
    justifyContent: sty ? "center" : "flex-end",
  };
  let discount;
  if (interest) {
    discount = Math.round(
      Number(price) + (price / 100) * interest
    ).toLocaleString("ru-RU");
  }

  return (
    <div style={style} className={s.priceBox}>
      {interest ? (
        <>
          <span className={s.oldPrice}>{discount}₴</span>
          <span className={s.newPrice}>{mainPrice}₴</span>
        </>
      ) : (
        <span className={s.price}>{mainPrice}₴</span>
      )}
    </div>
  );
};
