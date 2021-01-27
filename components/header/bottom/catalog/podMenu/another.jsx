import React from "react";
import {option} from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";
import {CatItemBlock} from "../catItemBlock/catItemBlock";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Another = (props) => {
  const loadGoods = props.modal;
  const loc = useRouter();
  const opt = option;
  const locale = useRouter().locale

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
          href="">{CatItemBlock(opt.goods[15].label[locale], 'vr.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[16].value)}>
        <Link href={href()} as={as(opt.goods[16].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[16].label[locale], 'udlin.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[17].value)}>
        <Link href={href()} as={as(opt.goods[17].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[17].label[locale], 'remeshki.jpg', "60%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[18].value)}>
        <Link href={href()} as={as(opt.goods[18].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[18].label[locale], 'gamepad.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[19].value)}>
        <Link href={href()} as={as(opt.goods[19].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[19].label[locale], 'uvlaj.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[20].value)}>
        <Link href={href()} as={as(opt.goods[20].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[20].label[locale], 'lampa.jpg', "79%")}</a></Link>
      </li>
    </ul>
  );
};
