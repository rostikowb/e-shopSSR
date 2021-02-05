import React from "react";
import {ADD_BASKET} from "../../../../../redux/types";
import s from "./btns.module.css";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";


export const SaleBtn = (props) => {
  const {isBasket, Modal, add, locale} = props;

  console.log(Modal);
  if (isBasket) {
    return (
      <div
        onClick={() => Modal(true)}
        className={s.saleBtn + " " + ss.cardBoxAll}
        title={locale === "ru" ? "Показать содержимое корзины." : "Показати вміст кошика."}
      >
        {locale === "ru" ? "Откр. Корзину" : "Відкр. Кошик"}
      </div>
    )
  } else {
    return (
      <div
        onClick={() => add(ADD_BASKET)}
        className={s.saleBtn + " " + ss.cardBoxAll}
        title={locale === "ru" ? "Добавить товар в корзину." : "Додати товар в корзину"}
      >
        {locale === "ru" ? "Купить" : "Купити"}
      </div>
    )
  }

}