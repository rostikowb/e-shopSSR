import React from "react";
import s from "./upperBar.module.css";
import {Sort} from "./sort/sort";
import {Salt} from "./salt/salt";
import {useRouter} from "next/router";

export const UpperBar = () => {
  const loc = useRouter();
  const sortEnable = loc.pathname === '/' || loc.pathname === '/goods/[catalog]'

  return (
    <div className={s.upperBar}>
      <Salt d={loc}/>
      <div className={s.sortBox}>{sortEnable ? <Sort/> : null}</div>
    </div>
  );
};
