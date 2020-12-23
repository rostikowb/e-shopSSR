import React, {useEffect} from "react";
import s from "./actions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  changeStateBasketModal,
  changeStateLikeModal,
} from "../../../../redux/modal/actions";
// import {useModal} from "../../../dopComp/lib/useModal";

export const Action = (props) => {
  const {basket, like, basketArr, likeArr, changeStateLikeModal, changeStateBasketModal} = props;
  // const basketOp = useModal(basket, changeStateBasketModal, 'basket');
  // const likeOp = useModal(like, changeStateLikeModal, 'like');

  // useEffect(()=>{
  //   if(like) likeOp.open()
  // }, [like])
  //
  // useEffect(()=>{
  //   if(basket) basketOp.open()
  // }, [basket])

  return (
    <div className={s.actionBox}>
      <div className={s.heartBox} onClick={() => changeStateLikeModal(true)}>
        <FontAwesomeIcon className={s.icon + " " + s.heart} icon={faHeart} />
        {likeArr && likeArr.length ? <span className={s.count}>{likeArr.length}</span> : null}
      </div>
      <div className={s.basketBox} onClick={() => changeStateBasketModal(true)}>
        <FontAwesomeIcon
          className={s.icon + " " + s.basket}
          icon={faShoppingBasket}
        />
        {basketArr && basketArr.length ? <span className={s.count}>{basketArr.length}</span> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
    basket: state.modal.basket,
    likeArr: state.addLikesBasket.likesArr,
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const Actions = connect(mapStateToProps, {
  changeStateLikeModal,
  changeStateBasketModal,
})(Action);
