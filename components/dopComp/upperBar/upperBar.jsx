import React from "react";
import s from "./upperBar.module.css";
import { Sort } from "./sort/sort";
import { Salt } from "./salt/salt";
import {useRouter} from "next/router";

export const UpperBar = (props) => {
    const loc = useRouter();
    let onegoods;

    try {
        onegoods = loc.query?.onegoods.split('__')[1].split('_').join(' ');
    }catch (e) {

    }
  return (
    <div className={s.upperBar}>
      <Salt d={loc} onegoods={onegoods} />
      <div className={s.sortBox}>{!onegoods ? <Sort /> : null}</div>
    </div>
  );
};
