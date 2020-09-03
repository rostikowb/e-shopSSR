import React from "react";
import s from "./top.module.css";
import { Info } from "./info/info";
import Auth from "./auth/auth";

export default function Logo() {
  return (
    <div className={s.headerTop}>
      <Info />
      <Auth />
    </div>
  );
}
