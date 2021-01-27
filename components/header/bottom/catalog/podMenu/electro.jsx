import React from "react";
import {option} from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";
import {CatItemBlock} from "../catItemBlock/catItemBlock";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Electro = (props) => {
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
      <li onClick={() => loadGoods(opt.goods[9].value)}>
        <Link href={href()} as={as(opt.goods[9].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[9].label[locale], 'nauhi.jpeg', "74%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[10].value)}>
        <Link href={href()} as={as(opt.goods[10].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[10].label[locale], 'powerbank.jpg', "59%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[11].value)}>
        <Link href={href()} as={as(opt.goods[11].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[11].label[locale], 'kolonki.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[12].value)}>
        <Link href={href()} as={as(opt.goods[12].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[12].label[locale], 'besprovzar.jpeg', "74%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[13].value)}>
        <Link href={href()} as={as(opt.goods[13].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[13].label[locale], 'nauhchehl.jpg', "79%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[14].value)}>
        <Link href={href()} as={as(opt.goods[14].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[14].label[locale], 'avtzar.jpg', "79%")}</a></Link>
      </li>
    </ul>
  );
};
