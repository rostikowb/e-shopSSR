import React from "react";
import { option } from "../../../../../option";
// import { NavLink } from "react-router-dom";
import { Acordeon } from "../../../../dopComp/acardeon/acardeon";

export const Electro = (props) => {
  const loadGoods = props.modal;
  let opt = option;
  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[9].value)}>
        <NavLink to={"/" + opt.goods[9].value}>{opt.goods[9].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[10].value)}>
        <NavLink to={"/" + opt.goods[10].value}>{opt.goods[10].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[11].value)}>
        <NavLink to={"/" + opt.goods[11].value}>{opt.goods[11].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[12].value)}>
        <NavLink to={"/" + opt.goods[12].value}>{opt.goods[12].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[13].value)}>
        <NavLink to={"/" + opt.goods[13].value}>{opt.goods[13].label}</NavLink>
      </li>
      <li onClick={() => loadGoods(opt.goods[14].value)}>
        <NavLink to={"/" + opt.goods[14].value}>{opt.goods[14].label}</NavLink>
      </li>
    </ul>
  );
};
