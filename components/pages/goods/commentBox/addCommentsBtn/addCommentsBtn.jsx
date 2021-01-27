import React from "react";
import s from "./addCommentsBtn.module.css";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";
import {useRouter} from "next/router";

export const AddCommentsBtn = (props) => {
  const commAdd = props.data;
  const locale = useRouter().locale;
  return (
    <div
      onClick={() => commAdd()}
      className={s.addCommentBtn + " " + ss.cardBoxAll}
    >
      {locale === "ru" ? "Оставить отзыв!" : "Залишити відгук!"}
    </div>
  );
};
