import React from "react";
import s from "./feedbackBtn.module.css";
import { connect } from "react-redux";
import { changeStateFeedbackModal } from "../../../redux/modal/actions";

export const FeedbackBt = (props) => {
  return (
    <div onClick={() => props.changeStateFeedbackModal()} className={s.btnBox}>
      Связатся с нами!
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal.feedback,
  };
};

export const FeedbackBtn = connect(mapStateToProps, {
  changeStateFeedbackModal,
})(FeedbackBt);
