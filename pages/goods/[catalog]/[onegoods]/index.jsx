import React from "react";
import {initializeStore} from "../../../../redux/store";
import {Goods} from "../../../../components/pages/goods/goods";
import {fetchAllGoodsId, fetchOneGoodsSSR} from "../../../../redux/oneGoods/action";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import {option} from "../../../../option";
import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";
import * as fs from 'fs'
import {addMorePageToSitemap} from "../../../../components/dopComp/lib/addMorePageToSitemap";

const onegoods = () => {
  return (<Goods/>)
};

export default onegoods;

export const getStaticPaths = async () => {

  const goodsId = await fetchAllGoodsId()
  let links = [];

  console.log('goodsId: ', goodsId.length);

  // const translit = new cyrillicToTranslit()
  // const name = translit.transform(goodsId[0]["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
  // console.log(goodsId[0].ctgrId);
  // const paths = [
  //   {params: {catalog: goodsId[0].ctgrId.toString(), onegoods: `${goodsId[0]._id}__${name}`}, locale: 'ua'},
  //   {params: {catalog: goodsId[0].ctgrId.toString(), onegoods: `${goodsId[0]._id}__${name}`}, locale: 'ru'}
  // ]
  const pathsUA = goodsId.map((post) => {

    if (post["nm"]) {
      const translit = new cyrillicToTranslit()
      const name = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
      const url = `/goods/${post.ctgrId}/${post._id}__${name}`;
      links.push({url, changefreq: 'weekly'});

      return {params: {catalog: post.ctgrId, onegoods: `${post._id}__${name}`}, locale: 'ua'}
    } else {
      console.log('error id: ' + post['_id']);
    }

    console.log('linksParseFinish');
    })

  const pathsRU = goodsId.map((post) => {

    if (post["nm"]) {
      const translit = new cyrillicToTranslit()
      const name = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
      // const url = `/goods/${post.ctgrId}/${post._id}__${name}`;
      // links.push({url, changefreq: 'weekly'});
      return {params: {catalog: post.ctgrId, onegoods: `${post._id}__${name}`}, locale: 'ru'}
    } else {
      console.log('error id: ' + post['_id']);
    }

    console.log('linksParseFinish');
  })

  const paths = [...pathsUA, ...pathsRU]

  links = addMorePageToSitemap(links)
  const stream = new SitemapStream({hostname: option.STATIC})
  const data = await streamToPromise(Readable.from(links).pipe(stream))
  await fs.promises.writeFile('./public/sitemap.xml', data.toString())

  return {paths, fallback: false}

}
export const getStaticProps = async ({params, locale}) => {

  const reduxStore = initializeStore();
  const {dispatch} = reduxStore;
  const productId = params.onegoods.split("__")[0];
  await fetchOneGoodsSSR(productId, dispatch, `/goods/${params.catalog}/${params.onegoods}`, locale);

  return {props: {initialReduxState: reduxStore.getState()}}

}