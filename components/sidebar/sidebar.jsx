import React from "react";
import s from "./sidebar.module.css";
import { menuContent as Menu } from "../menuContent/menuContent";
import { TovZnk } from "../dopComp/tovZnk/tovZnk";

export const Sidebar = () => {
  return (
    <div className={s.mainBox}>
      <Menu />
      <TovZnk />
    </div>
  );
};
