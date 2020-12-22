import s from "./menu.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {menuContent as Menu} from "../../../menuContent/menuContent";
import {TovZnk} from "../../../dopComp/tovZnk/tovZnk";
import React, {useEffect, useState} from "react";
import { Drawer } from '@material-ui/core';
import {NoSsr} from "@material-ui/core";
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {changeStateMenuDrawer} from "../../../../redux/modal/actions";

const MenuBt = ({menuIsOpen, changeStateMenuDrawer}) => {
  const loc = useRouter()
  const query = {...loc.query};
  const catalog = loc.query?.catalog;
  const [isClsBtn, setIsClsBtn] = useState(false)
  delete query.catalog
  delete query.onegoods
// вернуть для драйвера юзстейт
  const pushToUrl = (query) => {
    let pathname;

    if (loc.query?.onegoods) pathname = catalog + '/' + loc.query?.onegoods;
    else if (loc.query?.catalog) pathname = '/goods/' + catalog;
    else pathname = loc.pathname;

    const href = {
      pathname: loc.pathname,
      query
    }
    const as = {
      pathname,
      query
    }
    loc.push(href, as, {shallow: true})
  }

  const closeDrawer = () => {
    setIsClsBtn(true)
    changeStateMenuDrawer(false)
    delete query?.menu
    pushToUrl(query)
  }

  const openDrawer = () => {
    setIsClsBtn(false)
    changeStateMenuDrawer(true)
    pushToUrl({...query, menu: 'open'})
  }

  useEffect(() => {
    if (!loc.query?.menu && !isClsBtn) changeStateMenuDrawer(false)
  }, [loc.query?.menu])

  useEffect(() => {
    if (menuIsOpen) closeDrawer()
  }, [loc.pathname, loc.query?.sort])

  return (
    <div className={s.menu}>
      <NoSsr>
        <Drawer
          width={"auto"}
          open={menuIsOpen}
          onClose={() => closeDrawer()}
          height={"auto"}
        >
          <div className={s.menuBox}>
            <Menu/>
            <TovZnk/>
          </div>
        </Drawer>
      </NoSsr>
      <button onClick={() => openDrawer()}>
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