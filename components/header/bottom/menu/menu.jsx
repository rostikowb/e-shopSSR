import s from "./menu.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {menuContent as Menu} from "../../../menuContent/menuContent";
import {TovZnk} from "../../../dopComp/tovZnk/tovZnk";
import React from "react";
import {Drawer} from '@material-ui/core';
import {NoSsr} from "@material-ui/core";
import {connect} from "react-redux";
import {changeStateMenuDrawer} from "../../../../redux/modal/actions";
import {useModal} from "../../../dopComp/lib/useModal";

const MenuBt = ({menuIsOpen, changeStateMenuDrawer}) => {
  const {close, open} = useModal(menuIsOpen, changeStateMenuDrawer, 'menu')

  return (
    <div className={s.menu}>
      <NoSsr>
        <Drawer
          width={"auto"}
          open={menuIsOpen}
          onClose={() => close()}
          height={"auto"}
        >
          <div className={s.menuBox}>
            <Menu/>
            <TovZnk/>
          </div>
        </Drawer>
      </NoSsr>
      <button onClick={() => open()}>
        <FontAwesomeIcon className={s.icon} icon={faBars}/>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catalog: state.AllGoodsR.catalog,
    menuIsOpen: state.modal.menu,
  };
};

export const MenuBtn = connect(mapStateToProps, {changeStateMenuDrawer})(MenuBt);