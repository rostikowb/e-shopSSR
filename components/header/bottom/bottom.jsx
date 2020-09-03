import React from "react";
import { connect } from "react-redux";
import s from "./bottom.module.css";
import MenuBtn from "./menu/menu";
import Logo from "./logo/logo";
import CatalogBtn from "./catalog/catalogBtn/catalogBtn";
import Search from "./searchInput/search";
import { Actions } from "./actions/actions";
import { CatalogModal } from "./catalog/catalogModal/catalogModal";
import { changeStateCatalogModal } from "../../../redux/modal/actions";
import { LikesModal } from "./actions/likesModal/likesModal";
import { BasketModal } from "./actions/basketModal/basketModal";

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
    basket: state.modal.basket,
    catalog: state.modal.catalog,
  };
};

export const Bottom = connect(mapStateToProps, {
  changeStateCatalogModal,
})((props) => {
  return (
    <div className={s.headerBottom}>
      <div className={s.leftBottom}>
        <MenuBtn />
        <Logo />
        <CatalogBtn />
      </div>
      <div className={s.rightBottom}>
        <Search />
        <div className={s.modalBox}>
          {props.catalog ? <CatalogModal /> : null}
          {props.like ? <LikesModal /> : null}
          {props.basket ? <BasketModal /> : null}
        </div>
        <Actions />
      </div>
    </div>
  );
});
