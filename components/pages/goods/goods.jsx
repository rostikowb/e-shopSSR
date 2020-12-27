import React, {useEffect} from "react";
import s from "./goods.module.css";
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import {fetchOneGoods, imgOnShowSet} from "../../../redux/oneGoods/action";
import {setCatalog} from "../../../redux/goodsArr/actions";
import {Imgs} from "./imgs/imgs";
import {DopInf} from "./dopInf/dopInf";
import {DescChar} from "./descChar/descChar";
import {CommentBox} from "./commentBox/commentBox";
import {lsToStore} from "../../../localStorage/initAction";
import Head from "next/head";
import {option} from "../../../option";
import stripHtml from "string-strip-html";

const Good = (props) => {
  let loc = useRouter();
  let catalog = loc.query.catalog;
  let productId = loc.query.onegoods.split("__")[0];
  const desc = stripHtml(props.product.dscrptn).result

  const loadOneGoods = () => {
    props.setCatalog(catalog);
    props.fetchOneGoods(productId);
  };
  useEffect(() => {
    props.lsToStore();

    if (!props.product?.nm) {
      loc.push(
        "/error/404",
        "/error/404",
        {shallow: true}
      );
    }

    if (!props.product || (props.product._id !== productId) && loc.pathname === "/goods/[catalog]/[onegoods]") {
      loadOneGoods();
    }
  }, [productId]);

  return (
    <div className={s.goodsBox}>
      {props.product ? (
        <>
          <Head>
            <title>VSIVUHA - {props.product.nm}</title>
            <meta name="title"
                  content={`VSIVUHA - ${props.product.nm}`}/>
            <meta name="description"
                  content={`${desc}`}/>
            <meta name='apple-mobile-web-app-title' content={`VSIVUHA - ${props.product.nm}`}/>
            <meta name='twitter:title'
                  content={`VSIVUHA - ${props.product.nm}`}/>
            <meta name='twitter:description'
                  content={`${desc}`}/>
            <meta name='twitter:url'
                  content={'https://vsivuha.online'+loc.asPath}/>
            <meta name='twitter:image'
                  content={`https://vsivuha.online/webp/${props.product._id}/${props.product.img[0]}-1024.webp`}/>
            <meta key='ogtitle'
                  property="og:title"
                  content={`VSIVUHA - ${props.product.nm}`}/>
            <meta key="ogdescription"
                  property="og:description"
                  content={`${desc}`}/>
            <meta key="ogurl"
                  property="og:url"
                  content={'https://vsivuha.online'+loc.asPath}/>
            <meta key="ogimage"
                  property="og:image"
                  content={`https://vsivuha.online/jpeg/${props.product._id}/${props.product.img[0]}-1024.jpeg`}/>
          </Head>





          <div className={s.goodsInfo}>
            <Imgs data={props.product}/>
            <DopInf data={props.product}/>
          </div>
          <div className={s.descCharComBox}>
            <DescChar data={[props.product.dscrptn, props.product.prm]}/>
            <CommentBox/>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.oneGoods.product,
    visitedArr: state.oneGoods.visitedArr,
  };
};

export const Goods = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
  lsToStore,
  imgOnShowSet
})(Good);
