import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import s from "./catalogBtn.module.css";
import { connect } from "react-redux";
import { changeStateCatalogModal } from "../../../../../redux/modal/actions";

export default connect(null, { changeStateCatalogModal })((isModal) => {
  return (
    <div
      onClick={() => isModal.changeStateCatalogModal()}
      className={s.catalogBtn}
    >
      <button>
        <span className={`${s.catalogBtn1} ${s.catalogBtnAll}`}>
          <FontAwesomeIcon className={s.catalogBtnIcon} icon={faThLarge} />{" "}
          КАТАЛОГ ТОВАРОВ
        </span>

        <span className={`${s.catalogBtn2} ${s.catalogBtnAll}`}>
          <FontAwesomeIcon className={s.catalogBtnIcon} icon={faThLarge} />{" "}
          КАТАЛОГ
        </span>

        <span className={`${s.catalogBtn3} ${s.catalogBtnAll}`}>
          <FontAwesomeIcon className={s.catalogBtnIcon} icon={faThLarge} />
        </span>
      </button>
    </div>
  );
});
