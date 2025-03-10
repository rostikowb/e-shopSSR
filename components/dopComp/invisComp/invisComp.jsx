import React, {useEffect} from "react";
import {Feedback} from "../feedback/feedback";
import {initLocalStorage} from "../../../localStorage/localStorFunc";
import {connect} from "react-redux";
import {lsToStore} from "../../../localStorage/initAction";
import {CatalogModal} from "../../header/bottom/catalog/catalogModal/catalogModal";
import {LikesModal} from "../../header/bottom/actions/likesModal/likesModal";
import {BasketModal} from "../../header/bottom/actions/basketModal/basketModal";
import {useRouter} from "next/router";

export const InvisCom = (props) => {
  const {feedback, catalog, like, basket} = props
  const loc = useRouter()

  useEffect(() => {
    initLocalStorage();
    props.lsToStore();
  }, []);

  useEffect(() => {
    // initLocalStorage();
    props.lsToStore();
  }, [loc.locale]);

  return (
    <>
      {feedback ? <Feedback/> : null}
      {catalog ? <CatalogModal/> : null}
      {like ? <LikesModal/> : null}
      {basket ? <BasketModal/> : null}
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