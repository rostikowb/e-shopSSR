import React, {useEffect, useState} from "react";
import s from "./salt.module.css";
import Link from 'next/link'
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../../redux/goodsArr/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGhost} from "@fortawesome/free-solid-svg-icons";
import {option} from "../../../../option";
import {saltInfoCheck} from "./SaltLib";
import {FETCH_GOODS, STUB_ON} from "../../../../redux/types";

export const Sal = (props) => {
    let loc = props.d;
    let prodLab = loc.pathname.split("/");
    let catalog = loc.query?.catalog;
    let sort = loc.query.sort || props.sort;
    let onegoods = props.onegoods;
    let catalogLabel;
    let [infoPageCheck, setInfoPageCheck] = useState('');
    // console.log(catalog);
    try {
        catalogLabel = catalog
            ? option.goods.find((e) => e.value === catalog.toString()).label
            : null;
    }catch (e) {

    }

    const mainPage = () => {
        if(loc.query.page > 0){
            props.stubOn({type: STUB_ON});
            props.fetchGoods({type: FETCH_GOODS, catalog: null, sort});
        }
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
        // console.log('obj', obj);
        return obj;
    };

    useEffect(()=>{
        setInfoPageCheck(saltInfoCheck(loc))
    },[loc.pathname]);

    return (
        <div className={s.saltBox}>
            <Link href={href('/')} as={as('/')} passHref={true} shallow={true}>
                <a onClick={() => mainPage()}>Главная</a>
            </Link>{" "}
            <FontAwesomeIcon className={s.icon} icon={faGhost}/>
            {prodLab[2] === "[catalog]"? (
                <>
                    <Link href={href('/goods/[catalog]')} as={as(`/goods/${catalog}`)} passHref={true} shallow={true}>
                        <a onClick={() => catalogPage()}> {catalogLabel}</a>
                    </Link>
                    {prodLab[3] === "[onegoods]" ? (
                        <>
                            <FontAwesomeIcon className={s.icon} icon={faGhost}/>{" "}
                            <span className={s.goodsName}>{onegoods} </span>
                        </>
                    ) : null}
                </>
            ) : null}
            {infoPageCheck ? (<span className={s.goodsName}>{infoPageCheck} </span>):null}
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
