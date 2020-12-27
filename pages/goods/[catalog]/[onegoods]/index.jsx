import React from "react";
import {initializeStore} from "../../../../redux/store";
import {Goods} from "../../../../components/pages/goods/goods";
import {fetchAllGoodsId, fetchOneGoodsSSR} from "../../../../redux/oneGoods/action";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import {option} from "../../../../option";
import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";
import * as fs from 'fs'

const onegoods = () => {
  return (<Goods/>)
};

export default onegoods;

export const getStaticPaths = async () => {

  const goodsId = await fetchAllGoodsId()
  const links = [];

  console.log('goodsId: ', goodsId.length);

  const paths = goodsId.map((post) => {

    if(post["nm"]) {
      const translit = new cyrillicToTranslit()
      const name = translit.transform(post["nm"].replace(/[^a-zа-яё\d]/ig, '_'));
      const url = `/goods/${post.ctgrId}/${post._id}__${name}`;

      links.push({url, changefreq: 'weekly'});

      return url
    }else {
      console.log('error id: ' + post['_id']);
    }

    console.log('linksParseFinish');
  })

  const stream = new SitemapStream({hostname: option.STATIC})
  const data = await streamToPromise(Readable.from(links).pipe(stream))
  await fs.promises.writeFile('./public/sitemap.xml', data.toString())

  return {paths, fallback: false}

}
export const getStaticProps = async ({params}) => {

  const reduxStore = initializeStore();
  const {dispatch} = reduxStore;
  const productId = params.onegoods.split("__")[0];
  await fetchOneGoodsSSR(productId, dispatch, `/goods/${params.catalog}/${params.onegoods}`);

  return {props: {initialReduxState: reduxStore.getState()}}

}