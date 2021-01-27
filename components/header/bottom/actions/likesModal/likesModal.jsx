import React from "react";
import {connect} from "react-redux";
import {changeStateLikeModal} from "../../../../../redux/modal/actions";
import {Likes} from "./likes/likes";
import {Modal} from "../../../../dopComp/modal/modal";
import {useRouter} from "next/router";

export const LikesModa = (props) => {
  const locale = useRouter().locale;
  const options = {
    changeState: props.changeStateLikeModal,
    title: locale === 'ru' ? 'Избранное' : 'Список бажань',
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
