import {connect} from "react-redux";
import React from "react";
import {ModalAuth} from "./loginModal/modal.jsx";
import s from "./auth.module.css";
import {changeStateAuthModal} from "../../../../redux/modal/actions";
import {authExit} from "../../../../redux/auth/actions";
import {Locales} from "./locales/locales";
import {useRouter} from "next/router";

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userData,
  };
};

export default connect(mapStateToProps, {changeStateAuthModal, authExit})(
  (props) => {
    const locale = useRouter().locale;
    let FN = props?.user?.FN;
    return (
      <div className={s.authBox}>
        <Locales/>
        {!props.token ? (
          <>
            <span
              onClick={() => props.changeStateAuthModal()}
              className={s.authBtn}
            >
              {locale === 'ru' ? 'Войти в свой аккаунт' : 'Увійти в свій аккаунт'}
            </span>
            <ModalAuth/>
          </>
        ) : (
          <span>
            {locale === 'ru' ? 'Привет' : 'Привіт'} {FN ? FN : locale === 'ru' ? "Аноним" : "Анонім"}!{" "}
            <span className={s.exitBtn} onClick={() => props.authExit()}>
              {locale === 'ru' ? 'Выход' : 'Вихід'}
            </span>
          </span>
        )}
      </div>
    );
  }
);
