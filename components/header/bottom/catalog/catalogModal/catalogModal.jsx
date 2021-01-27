import React, {useState} from "react";
import {connect} from "react-redux";
import s from "./catalogModal.module.css";
import {fetchGoods, stubOn} from "../../../../../redux/goodsArr/actions";
import {changeStateCatalogModal} from "../../../../../redux/modal/actions";
import {Smart} from "../podMenu/smart";
import {Electro} from "../podMenu/electro";
import {Another} from "../podMenu/another";
import {FETCH_GOODS, STUB_ON} from "../../../../../redux/types";
import {useRouter} from 'next/router'
import {fetchFilterArr} from "../../../../../redux/filters/actions";
import {Modal} from "../../../../dopComp/modal/modal";

const mapStateToProps = (state) => {
  return {
    isActive: state.modal.catalog,
    sort: state.AllGoodsR.sort,
  };
};

export const CatalogModal = connect(mapStateToProps, {
  changeStateCatalogModal,
  fetchGoods,
  stubOn,
  fetchFilterArr
})((props) => {
  const loc = useRouter();
  const locale = loc.locale;

  const isUnderAttack = (value) => {
    props.changeStateCatalogModal();
    props.stubOn({type: STUB_ON});
    props.fetchFilterArr(value)
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: loc.query?.sort || props.sort,
      catalog: value,
    });
  };

  const option = {
    changeState: props.changeStateCatalogModal,
    title: "Каталог"
  }

  if (!props.isActive) return null;

  return <>
    <Modal options={option}>
      <div className={s.catalogBox}>
        <div className={s.catalogBlock}><h2>{locale === 'ru' ? "Для смартфона" : "Для смартфону"}</h2><Smart
          modal={isUnderAttack}/></div>
        <div className={s.catalogBlock}><h2>{locale === 'ru' ? "Малая электроника" : "Мала електроніка"}</h2><Electro
          modal={isUnderAttack}/></div>
        <div className={s.catalogBlock}><h2>{locale === 'ru' ? "Другое" : "Інше"}</h2><Another modal={isUnderAttack}/>
        </div>

      </div>
    </Modal>
  </>
});
