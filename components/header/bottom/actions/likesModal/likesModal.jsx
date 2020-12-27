import React from "react";
import {connect} from "react-redux";
import {changeStateLikeModal} from "../../../../../redux/modal/actions";
import {Likes} from "./likes/likes";
import {Modal} from "../../../../dopComp/modal/modal";

export const LikesModa = (props) => {
  const options = {
    changeState: props.changeStateLikeModal,
    title: 'Избранное',
    open: props.like
  }

  return <Modal options={options}><Likes/></Modal>

};

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
  };
};

export const LikesModal = connect(mapStateToProps, {
  changeStateLikeModal,
})(LikesModa);
