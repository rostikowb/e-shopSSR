import s from "./cardBasket.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import { addProdToCash } from "../../../../../redux/likesBasket/actions";
import { connect } from "react-redux";
import { ADD_BASKET } from "../../../../../redux/types";
import { changeStateBasketModal } from "../../../../../redux/modal/actions";
import {useRouter} from "next/router";

export const CardBasketBo = (props) => {
  const locale = useRouter().locale;
  let d = props.data;
  let br = props.basketArr;
  let isBasket = br ? br.find((item) => item._id == d._id) : null;
  const add = (type) => {
    props.addProdToCash(d["_id"], type, true, d);
  };
  return (
    <>
      {!isBasket ? (
        <div
          onClick={() => add(ADD_BASKET)}
          className={s.cardBox + " " + s.cardBoxAll}
        >
          <FontAwesomeIcon
            id={"CardBasket"+d.nm}
            className={s.icon}
            icon={faShoppingBasket}
            title="Добавить товар в корзину."
          />
        </div>
      ) : (
        <span
          onClick={() => props.changeStateBasketModal(true)}
          className={s.inBasket}
        >
          {locale === 'ru'? 'Откр. Корзину' :'Відкр. Корзину'}
        </span>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const CardBasketBox = connect(mapStateToProps, {
  addProdToCash,
  changeStateBasketModal,
})(CardBasketBo);
