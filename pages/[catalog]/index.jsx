import React, { useEffect } from "react";
import s from "../../styles/goodsArr.module.css";
import { connect } from "react-redux";
import { fetchGoods, stubOn, thisUrl } from "../../redux/goodsArr/actions";
import { FETCH_GOODS, STUB_ON } from "../../redux/types";
import { StubArr } from "../../components/pages/GoodsArr/stubArr/stubArr";
import { GoodsArrLoad } from "../../components/pages/GoodsArr/goodsArrLoad/goodsArrLoad";
import { useRouter } from 'next/router'
import {initializeStore} from "../../redux/store";
const location = useRouter();
// console.log(location);
// console.log('sss');
const GoodsAr = (props) => {
    // console.log('hhhh');
    const location = useRouter();
    let page = Number(location.query?.page);
    let sort = location.query?.sort || props?.sort;
  let path = location.query?.catalog;

  const firstLoad = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      catalog: path,
      sort: sort,
      page: page,
    });
  };

  useEffect(() => {
    firstLoad();
  }, [path]);

  return (
    <div className={s.goodsArr}>
      <ul className={s.goodsBox}>
        {/*Підгружені карточки товару*/}
        {!props.stub && !props.stub ? <GoodsArrLoad /> : null}

        {/*Заглушка*/}
        {props.stubP || props.stub ? <StubArr /> : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    isFirstL: state.AllGoodsR.isFirstL,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
    stub: state.AllGoodsR.stub,
    stubP: state.AllGoodsR.stubP,
    url: state.AllGoodsR.url,
  };
};

export default connect(mapStateToProps, {
  fetchGoods,
  thisUrl,
  stubOn,
})(GoodsAr);


// export function getServerSideProps() {
//     const reduxStore = initializeStore()
//     const { dispatch } = reduxStore
//
//     fetchGoods(dispatch);
//     // dispatch({
//     //     type: 'TICK',
//     //     light: false,
//     //     lastUpdate: Date.now(),
//     // })
//
//     return { props: { initialReduxState: reduxStore.getState() } }
// }