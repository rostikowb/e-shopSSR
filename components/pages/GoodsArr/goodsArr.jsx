import React, {useEffect} from "react";
import s from "../../../styles/goodsArr.module.css";
import {connect} from "react-redux";
import {fetchGoods, stubOn} from "../../../redux/goodsArr/actions";
import {FETCH_GOODS, STUB_ON} from "../../../redux/types";
import {StubArr} from "./stubArr/stubArr";
import {GoodsArrLoad} from "./goodsArrLoad/goodsArrLoad";
import {useRouter} from 'next/router'
import {lsToStore} from "../../../localStorage/initAction";

const GoodsAr = (props) => {
    const location = useRouter();
    let page = Number(location.query?.page);
    let catalog = location.query?.catalog;
    let sort = location.query?.sort || props?.sort;

    const firstLoad = () => {
        props.fetchGoods({
            type: FETCH_GOODS,
            catalog,
            sort,
            page,
        });
    };
    // console.log(location.route);
    useEffect(() => {
        props.lsToStore();
        // if(!props.currGoods.length){
        //     console.log(props.currGoods);

        // if(!page) firstLoad();

            // props.stubOn({type: STUB_ON});
        // }
        // props.stubOn({type: STUB_ON});
        // !props.isFirstL || firstLoad();
        console.log('location.pathname', location.pathname);
    }, [location.pathname]);

    return (
        <div className={s.goodsArr}>
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
