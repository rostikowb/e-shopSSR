import React from "react";
import s from "./basketModal.module.css";
import {connect} from "react-redux";
import {changeStateBasketModal} from "../../../../../redux/modal/actions";
import {BasketCart} from "./basket/basketCard";
import {SumInf} from "./dopInf/dopInf";
import {Modal} from "../../../../dopComp/modal/modal";
import {useRouter} from "next/router";

export const BasketModa = (props) => {
  const {basketArr, basketSum} = props;
  const locale = useRouter().locale;
  const options = {
    changeState: props.changeStateBasketModal,
    bottomChild: basketArr?.length ? (<SumInf data={[basketSum.count, basketSum.sum]}/>) : null,
    title: locale === "ru" ? 'Корзина': "Кошик"
  }

  return <Modal options={options}>
    <ul className={s.baskedBoxIn}>
      {basketArr?.length ? (
        basketArr.map((item, index) => (
          <li key={item._id + "basketCard"}>
            <BasketCart data={item} index={index}/>
          </li>
        ))
      ) : (
        <span className={s.emptyMsg}>
          {locale === "ru" ? "Ваша корзина пустая!" : "Ваш кошик порожній!"}
            </span>
      )}
    </ul>
  </Modal>
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
