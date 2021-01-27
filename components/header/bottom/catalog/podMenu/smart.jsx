import React from "react";
import {option} from "../../../../../option";
import Link from 'next/link'
import {useRouter} from "next/router";
import {CatItemBlock} from "../catItemBlock/catItemBlock";

// переписать цю діч на пуш замість лінк, в одну функцію

export const Smart = (props) => {
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
        <Link href={href()} as={as(opt.goods[0].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[0].label[locale], 'kabelySinhro.jpg', "74%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[1].value)}>
        <Link href={href()} as={as(opt.goods[1].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[1].label[locale], 'chehli.jpg', "87%")}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[2].value)}>
        <Link href={href()} as={as(opt.goods[2].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[2].label[locale], 'steklo.jpg', '79%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[3].value)}>
        <Link href={href()} as={as(opt.goods[3].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[3].label[locale], 'provodniZ.jpeg', '91%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[4].value)}>
        <Link href={href()} as={as(opt.goods[4].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[4].label[locale], 'monopod.jpeg', '79%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[5].value)}>
        <Link href={href()} as={as(opt.goods[5].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[5].label[locale], 'avtoderj.jpeg', '79%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[6].value)}>
        <Link href={href()} as={as(opt.goods[6].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[6].label[locale], 'perehod.jpeg', '79%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[7].value)}>
        <Link href={href()} as={as(opt.goods[7].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[7].label[locale], 'cartMem.jpeg', '79%')}</a></Link>
      </li>
      <li onClick={() => loadGoods(opt.goods[8].value)}>
        <Link href={href()} as={as(opt.goods[8].value)} passHref={true} shallow={true}><a
          href="">{CatItemBlock(opt.goods[8].label[locale], 'batery.jpeg', '74%')}</a></Link>
      </li>
    </ul>
  );
};
