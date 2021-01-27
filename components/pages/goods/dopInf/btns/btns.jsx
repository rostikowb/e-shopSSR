import s from "./btns.module.css";
import React from "react";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {connect} from "react-redux";
import {
  addProdToCash,
  delProdToCash,
} from "../../../../../redux/likesBasket/actions";
import {ADD_BASKET, ADD_LIKES, DEL_LIKES} from "../../../../../redux/types";
import {changeStateBasketModal} from "../../../../../redux/modal/actions";
import {useRouter} from "next/router";

export const OGBt = (props) => {
  let d = props.data;
  let lr = props.likeArr;
  let isLikes = lr ? lr.find((item) => item._id == d._id) : null;
  let br = props.basketArr;
  let isBasket = br ? br.find((item) => item._id == d._id) : null;
  const locale = useRouter().locale;

  const add = (type) => {
    props.addProdToCash(d["_id"], type, true, d);
  };
  const remove = (type) => {
    props.delProdToCash(type, d);
  };

  return (
    <div className={s.btnBox}>
      {!isBasket ? (
        <div
          onClick={() => add(ADD_BASKET)}
          className={s.saleBtn + " " + ss.cardBoxAll}
          title={locale === "ru" ? "Добавить товар в корзину." : "Додати товар в корзину"}
        >
          {locale === "ru" ? "Купить" : "Купити"}
        </div>
      ) : (
        <div
          onClick={() => add(props.changeStateBasketModal(true))}
          className={s.saleBtn + " " + ss.cardBoxAll}
          title={locale === "ru" ? "Показать содержимое корзины." : "Показати вміст кошика."}
        >
          {locale === "ru" ? "Откр. Корзину" : "Відкр. Кошик"}
        </div>
      )}

      <div
        onClick={() => (isLikes ? remove(DEL_LIKES) : add(ADD_LIKES))}
        className={s.likeBtn + " " + (isLikes ? s.likeBtnAct : s.likeBtnNoAct)}
      >
        <span
          className={s.likeBtnValue}>{!isLikes ? "В закладки" : locale === "ru" ? "Убрать из закладок" : "Убрать із закладок"}</span>
        <FontAwesomeIcon
          className={s.icon}
          title={
            !isLikes
              ? locale === "ru" ? "Добавить товар в избранное/понравившееся." : "Додати товар в список бажань."
              : locale === "ru" ? "Убрать товар из избранного/понравившегося." : "Прибрати товар зі списку бажань."
          }
          icon={faHeart}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    likeArr: state.addLikesBasket.likesArr,
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const OGBtn = connect(mapStateToProps, {
  addProdToCash,
  delProdToCash,
  changeStateBasketModal,
})(OGBt);
