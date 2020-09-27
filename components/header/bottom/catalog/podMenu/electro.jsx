import React from "react";
import { option } from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Electro = (props) => {
  const loadGoods = props.modal;
  let loc = useRouter();
  let opt = option;

    const href = ()=>{
        let obj = {pathname: '/[catalog]'};
        if(loc.query?.sort) obj.query = {sort: loc.query.sort};
        return obj
    };
    const as = (value)=>{
        let obj = {pathname: '/'+value};
        if(loc.query?.sort) obj.query = {sort: loc.query.sort};
        return obj;
    };

  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[9].value)}>
          <Link href={href()} as={as(opt.goods[9].value)} passHref={true} shallow={true}><a href="">{opt.goods[9].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[10].value)}>
          <Link href={href()} as={as(opt.goods[10].value)} passHref={true} shallow={true}><a href="">{opt.goods[10].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[11].value)}>
          <Link href={href()} as={as(opt.goods[11].value)} passHref={true} shallow={true}><a href="">{opt.goods[11].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[12].value)}>
          <Link href={href()} as={as(opt.goods[12].value)} passHref={true} shallow={true}><a href="">{opt.goods[12].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[13].value)}>
          <Link href={href()} as={as(opt.goods[13].value)} passHref={true} shallow={true}><a href="">{opt.goods[13].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[14].value)}>
          <Link href={href()} as={as(opt.goods[14].value)} passHref={true} shallow={true}><a href="">{opt.goods[14].label}</a></Link>
      </li>
    </ul>
  );
};
