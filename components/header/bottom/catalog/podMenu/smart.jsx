import React from "react";
import { option } from "../../../../../option";
import Link from 'next/link'
import { Acordeon } from "../../../../dopComp/acardeon/acardeon";

export const Smart = (props) => {
  const loadGoods = props.modal;
  let opt = option;
  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[0].value)}>
        <Link href={"/" + opt.goods[0].value}>{opt.goods[0].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[1].value)}>
        <Link href={"/" + opt.goods[1].value}>{opt.goods[1].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[2].value)}>
        <Link href={"/" + opt.goods[2].value}>{opt.goods[2].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[3].value)}>
        <Link href={"/" + opt.goods[3].value}>{opt.goods[3].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[4].value)}>
        <Link href={"/" + opt.goods[4].value}>{opt.goods[4].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[5].value)}>
        <Link href={"/" + opt.goods[5].value}>{opt.goods[5].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[6].value)}>
        <Link href={"/" + opt.goods[6].value}>{opt.goods[6].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[7].value)}>
        <Link href={"/" + opt.goods[7].value}>{opt.goods[7].label}</Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[8].value)}>
        <Link href={"/" + opt.goods[8].value}>{opt.goods[8].label}</Link>
      </li>
    </ul>
  );
};
