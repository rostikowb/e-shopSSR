import React from "react";
import { option } from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Smart = (props) => {
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

    // const pushUrl = (value)=>{
    //     loc.push(
    //         {pathname: href()},
    //         {pathname: as(value)},
    //         {shallow:true}
    //     );
    // };

  return (
    <ul>
      <li onClick={() => loadGoods(opt.goods[0].value)}>
          <Link href={href()} as={as(opt.goods[0].value)} passHref={true} shallow={true}><a href="">{opt.goods[0].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[1].value)}>
          <Link href={href()} as={as(opt.goods[1].value)} passHref={true} shallow={true}><a href="">{opt.goods[1].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[2].value)}>
          <Link href={href()} as={as(opt.goods[2].value)} passHref={true} shallow={true}><a href="">{opt.goods[2].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[3].value)}>
          <Link href={href()} as={as(opt.goods[3].value)} passHref={true} shallow={true}><a href="">{opt.goods[3].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[4].value)}>
          <Link href={href()} as={as(opt.goods[4].value)} passHref={true} shallow={true}><a href="">{opt.goods[4].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[5].value)}>
          <Link href={href()} as={as(opt.goods[5].value)} passHref={true} shallow={true}><a href="">{opt.goods[5].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[6].value)}>
          <Link href={href()} as={as(opt.goods[6].value)} passHref={true} shallow={true}><a href="">{opt.goods[6].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[7].value)}>
          <Link href={href()} as={as(opt.goods[7].value)} passHref={true} shallow={true}><a href="">{opt.goods[7].label}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[8].value)}>
          <Link href={href()} as={as(opt.goods[8].value)} passHref={true} shallow={true}><a href="">{opt.goods[8].label}</a></Link>
      </li>
    </ul>
  );
};
