import React from "react";
import {option} from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";
import {CatItemBlock} from "../catItemBlock/catItemBlock";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Another = (props) => {
  const loadGoods = props.modal;
  let loc = useRouter();
  let opt = option;

  const href = () => {
    let obj = {pathname: '/goods/[catalog]'};
    if (loc.query?.sort) obj.query = {sort: loc.query.sort};
    return obj
  };
  const as = (value) => {
    let obj = {pathname: '/goods/' + value};
    if (loc.query?.sort) obj.query = {sort: loc.query.sort};
    return obj;
  };

  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[15].value)}>
        <Link href={href()} as={as(opt.goods[9].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[15].label, 'vr.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[16].value)}>
        <Link href={href()} as={as(opt.goods[16].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[16].label, 'udlin.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[17].value)}>
        <Link href={href()} as={as(opt.goods[17].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[17].label, 'remeshki.jpg', "60%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[18].value)}>
        <Link href={href()} as={as(opt.goods[18].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[18].label, 'gamepad.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[19].value)}>
        <Link href={href()} as={as(opt.goods[19].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[19].label, 'uvlaj.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[20].value)}>
        <Link href={href()} as={as(opt.goods[20].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[20].label, 'lampa.jpg', "79%")}</a></Link>
      </li>
    </ul>
  );
};
