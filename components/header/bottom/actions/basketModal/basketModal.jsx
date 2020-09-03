import React from "react";
import s from "./basketModal.module.css";
import { connect } from "react-redux";
import { changeStateBasketModal } from "../../../../../redux/modal/actions";
import { BasketCart } from "./basket/basketCard";
import { SumInf } from "./dopInf/dopInf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const BasketModa = (props) => {
  let mdl = props.basket;
  let arr = props.basketArr;

  return mdl ? (
    <div>
      <div
        onClick={() => props.changeStateBasketModal()}
        className={s.modal_basked_box}
      />
      <div className={s.modal_basked}>
        <div className={s.topModal}>
          <span className={s.title}>Корзина</span>
          <FontAwesomeIcon
            onClick={() => props.changeStateBasketModal()}
            className={s.clsModalBtn}
            icon={faTimesCircle}
          />
        </div>

        <ul className={s.baskedBoxIn}>
          {arr?.length ? (
            arr.map((item, index) => (
              <li key={item._id + "basketCard"}>
                <BasketCart data={item} index={index} />
              </li>
            ))
          ) : (
            <span className={s.emptyMsg}>
              Ваша корзина покупок <b>&nbsp;пустая!&nbsp;</b>
            </span>
          )}
        </ul>
        {arr?.length ? (
          <SumInf data={[props.basketSum.count, props.basketSum.sum]} />
        ) : null}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    basket: state.modal.basket,
    basketArr: state.addLikesBasket.basketArr,
    basketSum: state.addLikesBasket.basketSum,
  };
};

export const BasketModal = connect(mapStateToProps, {
  changeStateBasketModal,
})(BasketModa);
