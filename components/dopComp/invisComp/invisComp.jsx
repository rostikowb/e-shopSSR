import React, {useEffect, useState} from "react";
import {Feedback} from "../feedback/feedback";
import {initLocalStorage} from "../../../localStorage/localStorFunc";
import {connect} from "react-redux";
import {lsToStore} from "../../../localStorage/initAction";
import {CatalogModal} from "../../header/bottom/catalog/catalogModal/catalogModal";
import {LikesModal} from "../../header/bottom/actions/likesModal/likesModal";
import {BasketModal} from "../../header/bottom/actions/basketModal/basketModal";

export const InvisCom = (props) => {

  useEffect(() => {
    initLocalStorage();
    props.lsToStore();
  }, []);

  return (
    <>
      {props.feedback ? <Feedback/> : null}
      {props.catalog ? <CatalogModal/> : null}
      {props.like ? <LikesModal/> : null}
      {props.basket ? <BasketModal/> : null}
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
    basket: state.modal.basket,
    catalog: state.modal.catalog,
    feedback: state.modal.feedback,
  };
};

export const InvisComp = connect(mapStateToProps, {
  lsToStore,
})(InvisCom);