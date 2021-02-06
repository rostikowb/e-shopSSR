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
  let paths = [];
  let goodsLang = goodsId.length;




  while (goodsLang--) {
    const post = goodsId[goodsLang];
    console.log('goodsId: ', goodsLang);

    if (!post["nm"]) {
      console.log('error id: ' + post['_id']);
      continue;
    }

    const translit = new cyrillicToTranslit()
    const name_RU = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
    const url_RU = `/goods/${post.ctgrId}/${post._id}__${name_RU}`;
    const name_UA = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
    const url_UA = `/goods/${post.ctgrId}/${post._id}__${name_UA}`;
    const UApath = {params: {catalog: post.ctgrId.toString(), onegoods: `${post._id}__${name}`}, locale: 'ua'};
    const RUpath = {params: {catalog: post.ctgrId.toString(), onegoods: `${post._id}__${name}`}, locale: 'ru'};

    const param = {
      url_UA,
      changefreq: 'weekly',
      links: [
        {lang: 'ua', url: url_UA},
        {lang: 'ua-ru', url: url_RU}
      ]
    };

    links.push(param)
    paths = [...paths, UApath, RUpath]

  }
  console.log('linksParseFinish');

  // })

  // const pathsUA = goodsId.map((post) => {
  //   const nm = post["nm_UA"] || post["nm"]
  //   if (nm) {
  //     const translit = new cyrillicToTranslit()
  //     const name = translit.transform(nm.replace(/[^a-zа-яё\d]/ig, '_'));
  //     const url = `/goods/${post.ctgrId}/${post._id}__${name}`;
  //
  //     const sitemap = {url, changefreq: 'weekly', links: []}
  //     sitemap.links.push({ lang: 'ua', url })
  //     links.push(sitemap);
  //
  //     return {params: {catalog: post.ctgrId.toString(), onegoods: `${post._id}__${name}`}, locale: 'ua'}
  //   } else {
  //     console.log('error id: ' + post['_id']);
  //   }
  //
  //   console.log('linksParseFinish');
  //   })
  //
  // const pathsRU = goodsId.map((post) => {
  //
  //   if (post["nm"]) {
  //     const translit = new cyrillicToTranslit()
  //     const name = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
  //     const url = `/ru/goods/${post.ctgrId}/${post._id}__${name}`;
  //
  //     const sitemap = {url, changefreq: 'weekly', links: []}
  //     sitemap.links.push({ lang: 'ua-ru', url: url })
  //     links.push(sitemap);
  //
  //     return {params: {catalog: post.ctgrId.toString(), onegoods: `${post._id}__${name}`}, locale: 'ru'}
  //   } else {
  //     console.log('error id: ' + post['_id']);
  //   }


  // })

  // const paths = [...pathsUA, ...pathsRU]

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