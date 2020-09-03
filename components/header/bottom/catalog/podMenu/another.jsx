import React from "react";
import { option } from "../../../../../option";
// import { NavLink } from "react-router-dom";
import { Acordeon } from "../../../../dopComp/acardeon/acardeon";

export const Another = (props) => {
  const loadGoods = props.modal;
  let opt = option;
  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[15].value)}>
        <NavLink to={"/" + opt.goods[15].value}>{opt.goods[15].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[16].value)}>
        <NavLink to={"/" + opt.goods[16].value}>{opt.goods[16].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[17].value)}>
        <NavLink to={"/" + opt.goods[17].value}>{opt.goods[17].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[18].value)}>
        <NavLink to={"/" + opt.goods[18].value}>{opt.goods[18].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[19].value)}>
        <NavLink to={"/" + opt.goods[19].value}>{opt.goods[19].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[20].value)}>
        <NavLink to={"/" + opt.goods[20].value}>{opt.goods[20].label}</NavLink>
      </li>
    </ul>
  );
};
