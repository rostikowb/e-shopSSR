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

const Good = (props) => {
  let loc = useRouter();
  let catalog = loc.query.catalog;
  let productId = loc.query.onegoods.split("__")[0];

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
            <title key={'title'}>VSIVUHA - {props.product.nm}</title>
            <meta name="title"
                  content={`VSIVUHA - ${props.product.nm}`}/>
            <meta name="description"
                  content={`${props.product.dscrptn}`}/>

            <meta name='twitter:title'
                  content='vsivuha.online! - Техника для телефона на любой ценовой вкус 😉'/>
            <meta name='twitter:description'
                  content={`${props.product.dscrptn}`}/>
            <meta name='twitter:image'
                  content={`${option.STATIC}/webp/${props.product._id}/${props.product.img[0]}-1024.webp`}/>

            <meta name={'og:title'}
                  property="og:title"
                  content={`VSIVUHA - ${props.product.nm}`}/>
            <meta name={"og:description"}
                  property="og:description"
                  content={`${props.product.dscrptn}`}/>
            <meta name={"og:image"}
                  property="og:image"
                  content={`${option.STATIC}/webp/${props.product._id}/${props.product.img[0]}-1024.webp`}/>
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
