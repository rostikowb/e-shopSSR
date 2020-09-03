import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./catalogModal.module.css";
import { fetchGoods, stubOn } from "../../../../../redux/goodsArr/actions";
// import { NavLink } from "react-router-dom";
import { option } from "../../../../../option";
import { changeStateCatalogModal } from "../../../../../redux/modal/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Smart } from "../podMenu/smart";
import { Electro } from "../podMenu/electro";
import { Another } from "../podMenu/another";
import { Acordeon } from "../../../../dopComp/acardeon/acardeon";

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
})((props) => {
  const [isCatalog, setCatalog] = useState("smart");

  return props.isActive ? (
    <div>
      <div
        onClick={() => props.changeStateCatalogModal()}
        className={s.modal_catalog_box}
      />
      <div className={s.modal_catalog}>
        <div className={s.catalogInBox}>
          <div className={s.mainMenu}>
            <div className={s.title}>Каталог</div>
            <div className={s.menuBox}>
              <span
                className={isCatalog === "smart" ? s.activeCat : null}
                onClick={() => setCatalog("smart")}
              >
                Смартфоны, сопутствующее
              </span>
              <span
                className={isCatalog === "elec" ? s.activeCat : null}
                onClick={() => setCatalog("elec")}
              >
                Электроника
              </span>
              <span
                className={isCatalog === "another" ? s.activeCat : null}
                onClick={() => setCatalog("another")}
              >
                Разное
              </span>
            </div>
          </div>
          <div className={s.podMenu}>
            <div className={s.titlePod}>
              <span>Подкаталог</span>
              <FontAwesomeIcon
                onClick={() => props.changeStateCatalogModal()}
                className={s.clsModalBtn}
                icon={faTimesCircle}
              />
            </div>
            <div className={s.menuBox}>
              {isCatalog === "smart" ? (
                <div className={s.forSmart}>
                  <Smart modal={props.changeStateCatalogModal} />
                </div>
              ) : null}
              {isCatalog === "elec" ? (
                <div className={s.smallElec}>
                  <Electro modal={props.changeStateCatalogModal} />
                </div>
              ) : null}
              {isCatalog === "another" ? (
                <div className={s.another}>
                  <Another modal={props.changeStateCatalogModal} />
                </div>
              ) : null}
            </div>
          </div>

          {/**/}
          {/**/}

          <div className={s.mobileBox}>
            <div className={s.catalogBoxMobile}>
              <Acordeon
                info={{
                  title: "Для смартфона",
                  open: false,
                  render: true,
                  content: <Smart modal={props.changeStateCatalogModal} />,
                }}
              />
              <Acordeon
                info={{
                  title: "Электронное",
                  open: false,
                  render: true,
                  content: <Electro modal={props.changeStateCatalogModal} />,
                }}
              />
              <Acordeon
                info={{
                  title: "Разное",
                  open: false,
                  render: true,
                  content: <Another modal={props.changeStateCatalogModal} />,
                }}
              />
            </div>
            <div className={s.closeBtnBox}>
              <span onClick={() => props.changeStateCatalogModal()}>
                Закрыть
              </span>
            </div>
          </div>

          {/**/}
          {/**/}
        </div>
      </div>
    </div>
  ) : null;
});
