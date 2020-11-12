import React, {useEffect} from "react";
import s from "../../../styles/goodsArr.module.css";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../redux/goodsArr/actions";
import {FETCH_GOODS, STUB_ON} from "../../../redux/types";
import {StubArr} from "./stubArr/stubArr";
import {GoodsArrLoad} from "./goodsArrLoad/goodsArrLoad";
import {useRouter} from 'next/router'
import {lsToStore} from "../../../localStorage/initAction";
import Head from "next/head";
import {option} from "../../../option";

const GoodsAr = (props) => {
    const loc = useRouter();
    let page = Number(loc.query?.page);
    let catalog = loc.query?.catalog;
    let sort = loc.query?.sort || props?.sort;

    const firstLoad = () => {
        props.fetchGoods({
            type: FETCH_GOODS,
            catalog,
            sort,
            page,
        });
    };
    // console.log(loc.route);
    useEffect(() => {
        props.lsToStore();
        // if(loc.pathname === '/' && (loc.query.page > 0 || loc.query.sort !== 'byRating')){
        //     props.stubOn({type: STUB_ON});
        //     props.fetchGoods({
        //         type: FETCH_GOODS,
        //     })
        // }
        // if(!props.currGoods.length){
        //     console.log(props.currGoods);

        // if(!page) firstLoad();

            // props.stubOn({type: STUB_ON});
        // }
        // props.stubOn({type: STUB_ON});
        // !props.isFirstL || firstLoad();
        console.log('loc.pathname', loc.pathname);
    }, [loc.pathname]);

    return (
        <div className={s.goodsArr}>
            {/*<Head>*/}
            {/*    <title>Meta Tags — Preview, Edit and Generate</title>*/}
            {/*    <meta name="title" content={`vsivuha.online`}/>*/}
            {/*    <meta name="description"*/}
            {/*          content={`тараррарар`}/>*/}

            {/*    <meta property="og:type" content="website"/>*/}
            {/*    <meta property="og:url" content="https://vsivuha.online/"/>*/}
            {/*    <meta property="og:title" content={`vsivuha - топ магаз`}/>*/}
            {/*    <meta property="og:description"*/}
            {/*          content={`Все для смартфона, наушники, чехлы, зарядки и т.д`}/>*/}
            {/*    /!*<meta property="og:image"*!/*/}
            {/*    /!*      content={`${option.STATIC}/webp/${props.product._id}/${props.product.img[0]}-1024.webp`}/>*!/*/}

            {/*</Head>*/}
            <ul className={s.goodsBox}>
                {/*Підгружені карточки товару*/}
                {!props.stub && !props.stub ? <GoodsArrLoad/> : null}

                {/*Заглушка*/}
                {props.stubP || props.stub ? <StubArr/> : null}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currGoods: state.AllGoodsR.currGoods,
        sort: state.AllGoodsR.sort,
        isFirstL: state.AllGoodsR.isFirstL,
        stub: state.AllGoodsR.stub,
        stubP: state.AllGoodsR.stubP,
    };
};

export const GoodsArr = connect(mapStateToProps, {
    fetchGoods,
    stubOn,
    lsToStore
})(GoodsAr);
