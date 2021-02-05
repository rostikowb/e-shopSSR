import React from "react";
import {ADD_LIKES, DEL_LIKES} from "../../../../../redux/types";
import s from "./btns.module.css";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";


export const LikeBtn = (props) => {
  const {isLikes, remove, add, locale} = props;


  if (isLikes) {
    return (
      <div
        onClick={() => remove(DEL_LIKES)}
        className={s.saleBtn + " " + s.likeBtn + " " + s.likeBtnAct}
        title={locale === "ru" ? "Убрать товар из избранного/понравившегося." : "Прибрати товар зі списку бажань."}
      >
        {locale === "ru" ? "Убрать из закладок" : "Убрать із закладок"}
      </div>
    )
  } else {
    return (
      <div
        onClick={() => add(ADD_LIKES)}
        className={s.saleBtn + " " + s.likeBtn}
        title={locale === "ru" ? "Добавить товар в избранное/понравившееся." : "Додати товар в список бажань."}
      >
        {"В закладки"}
      </div>
    )
  }

}