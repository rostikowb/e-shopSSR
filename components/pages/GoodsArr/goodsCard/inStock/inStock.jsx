import s from "./inStock.module.css";
import React from "react";
import {useRouter} from "next/router";

export const InStock = (props) => {
  let nal = props.stock;
  const locale = useRouter().locale;

  return (
    <div className={s.inStockBox}>
      {nal > 0 ? (
        <span className={s.nal}>{locale === 'ru'? "В наличии" :"В наявності"} 😅</span>
      ) : (
        <span className={s.notNal}>{locale === 'ru'? "Нет в наличии" :"Нема в наявності"} 😫</span>
      )}
    </div>
  );
};
