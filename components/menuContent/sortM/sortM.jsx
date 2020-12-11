import s from "../menuContent.module.css";
import {Sort} from "../../dopComp/upperBar/sort/sort";
import React from "react";

export const SortM = (loc) => {
  if (loc.pathname === '/' || loc.pathname === '/goods/[catalog]') {
    return (
      <div className={s.sortInMenu}>
        <span>Сортировать по:</span>
        <Sort/>
      </div>
    )
  }
}