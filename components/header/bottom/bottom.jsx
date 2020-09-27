import React from "react";
import s from "./bottom.module.css";
import {MenuBtn} from "./menu/menu";
import Logo from "./logo/logo";
import CatalogBtn from "./catalog/catalogBtn/catalogBtn";
import { Search } from "./searchInput/search";
import { Actions } from "./actions/actions";

export const Bottom = () => {
    // debugger;
  return (
    <div className={s.headerBottom}>
      <div className={s.leftBottom}>
        <MenuBtn />
        <Logo />
        <CatalogBtn />
      </div>
      <div className={s.rightBottom}>
        <Search />
        <Actions />
      </div>
    </div>
  );
};
