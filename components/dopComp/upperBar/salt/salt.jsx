import React, {useEffect} from "react";
import s from "./salt.module.css";
import Link from 'next/link'
import {FETCH_GOODS, STUB_ON} from "../../../../redux/types";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../../redux/goodsArr/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGhost} from "@fortawesome/free-solid-svg-icons/index";
import {option} from "../../../../option";
import {useRouter} from 'next/router'

export const Sal = (props) => {
    let loc = props.d;
    let prodLab = loc.pathname.split("/");
    let catalog = loc.query?.catalog;
    let sort = loc.query.sort || props.sort;
    let onegoods = props.onegoods;
    let catalogLabel;
    console.log(catalog);
    try {
        catalogLabel = catalog
            ? option.goods.find((e) => e.value === catalog.toString()).label
            : null;
    }catch (e) {

    }
    // catalogLabel
    // console.log(loc);
    const mainPage = () => {
        // if(loc.pathname !== '/'){
        //     props.stubOn({type: STUB_ON});
        //     props.fetchGoods({type: FETCH_GOODS, catalog: null, sort});
        // }
    };

    const catalogPage = () => {
        // props.stubOn({type: STUB_ON});
        // props.fetchGoods({
        //     type: FETCH_GOODS,
        //     catalog,
        //     sort,
        // });
    };

    const href = (value)=>{
        let obj = {pathname: value};
        if(sort) obj.query = {sort};
        return obj
    };

    const as = (value)=>{
        let obj = {pathname: value};
        if(sort) obj.query = {sort};
        return obj;
    };

    // useEffect(()=>{
    //
    // },[]);

    return (
        <div className={s.saltBox}>
            <Link href={href('/')} as={as('/')} passHref={true} shallow={true}>
                <a onClick={() => mainPage()}>Главная</a>
            </Link>{" "}
            <FontAwesomeIcon className={s.icon} icon={faGhost}/>
            {prodLab[1] ? (
                <>
                    <Link href={href('/[catalog]')} as={as(`/${catalog}`)} passHref={true} shallow={true}>
                        <a onClick={() => catalogPage()}> {catalogLabel}</a>
                    </Link>
                    {prodLab[2] ? (
                        <>
                            <FontAwesomeIcon className={s.icon} icon={faGhost}/>{" "}
                            <span className={s.goodsName}>{onegoods} </span>
                        </>
                    ) : null}
                </>
            ) : null}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        currGoods: state.AllGoodsR.currGoods,
        stub: state.AllGoodsR.stub,
        catalog: state.AllGoodsR.catalog,
        sort: state.AllGoodsR.sort,
    };
};

export const Salt = connect(mapStateToProps, {
    fetchGoods,
    stubOn,
})(Sal);
