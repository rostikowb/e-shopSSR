import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {faSync} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Paper} from '@material-ui/core';
import s from "./nextBtnCard.module.css";
import ss from "../../../../styles/goodsArr.module.css";
import Link from 'next/link';
import {FETCH_GOODS_PAGES, STUB_ON_P} from "../../../../redux/types";
import {fetchGoods, setWidthCard, stubOn} from "../../../../redux/goodsArr/actions";
import {useRouter} from 'next/router'
import {useResizeSwipe} from "../../goods/imgs/useResizeSwiper";
import useDebounce from "../../../dopComp/lib/debounce";



const NextBtnCar = (props) => {
    let loc = useRouter();
    let page = ((Number(loc.query.page) + 1) || 1);
    let sort = props.sort;

    const loadGoods = () => {
        props.stubOn({type: STUB_ON_P});
        props.fetchGoods({
            type: FETCH_GOODS_PAGES,
            sort: sort,
            page: page,
            catalog: props.catalog,
        });
    };

    const nexBtnRef = useRef(null);
    const  widthR = useResizeSwipe(nexBtnRef);
    const [width, setWidth] = useState(0)
    const [i, iSet] = useState(false)

    useEffect(() => {
        setWidth(nexBtnRef.current ? nexBtnRef.current.offsetWidth : 0);
    }, [nexBtnRef.current]);

    useEffect(()=>{
        if(widthR){
            i ? setWidth(widthR) : iSet(true);
        }
    }, [widthR])

    const cooldown = useDebounce(width, 1000);

    useEffect(()=>{
        if(cooldown){
            props.setWidthCard(cooldown)
        }
    }, [cooldown])


    // console.log(width);
    return (
        <li ref={nexBtnRef} className={ss.stubElem}>
            <Link href={{pathname: loc.pathname, query: {sort: sort, page: page}}}
                  as={{pathname: loc.query?.catalog?'/'+loc.query.catalog:'/', query: {sort: sort, page: page}}}
                  scroll={false}
                  passHref={true}
                  shallow={true}
            >
                <a onClick={() => loadGoods()}>
                    <Paper className={s.cardBox} elevation={3}>
                        <FontAwesomeIcon
                            className={s.icon}
                            title="Подгрузить еще!"
                            icon={faSync}
                        />
                        <span>Подгрузить еще!</span>
                    </Paper>
                </a>
            </Link>
        </li>
    );
};

const mapStateToProps = (state) => {
    return {
        sort: state.AllGoodsR.sort,
        catalog: state.AllGoodsR.catalog,
    };
};

export const NextBtnCard = connect(mapStateToProps, {
    fetchGoods,
    stubOn,
    setWidthCard,
})(NextBtnCar);
