import React from "react";
import s from "./likes.module.css";
import {
  addProdToCash,
  delProdToCash,
} from "../../../../../../redux/likesBasket/actions";
import { connect } from "react-redux";
import { GoodsCard } from "../../../../../pages/GoodsArr/goodsCard/goodsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { changeStateLikeModal } from "../../../../../../redux/modal/actions";

export const Like = (props) => {
  let lr = props.likesArr;

  return (
    <>
      <div className={s.topModal}>
        <span className={s.title}>Избранное</span>
        <FontAwesomeIcon
          onClick={() => props.changeStateLikeModal()}
          className={s.clsModalBtn}
          icon={faTimesCircle}
        />
      </div>

      <ul className={s.likeBoxIn}>
        {lr?.length ? (
          lr.map((item) => (
            <li className={s.goodsElem} key={item._id + "likeCard"}>
              <GoodsCard data={[item, true, true]} />
            </li>
          ))
        ) : (
          // lr.map((item) => <LikesCard key={item._id + "likeCard"} data={item} />)
          <span className={s.empLikMsg}>
            Добавьте понравившейся товар в <b>&nbsp;избранное&nbsp;</b> что бы
            не потерять!
          </span>
        )}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    likesArr: state.addLikesBasket.likesArr,
  };
};

export const Likes = connect(mapStateToProps, {
  addProdToCash,
  delProdToCash,
  changeStateLikeModal,
})(Like);
