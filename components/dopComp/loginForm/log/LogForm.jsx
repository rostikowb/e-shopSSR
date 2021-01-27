import React from "react";
import s from "../login.module.css";
import {EmailInput} from "../inputs/email";
import {PassInput} from "../inputs/pass";
import {ButtonInput} from "../inputs/button";
import {connect} from "react-redux";
import {authSendApi, authStubOn, changeIsForm} from "../../../../redux/auth/actions";
import {useRouter} from "next/router";

export const LogFor = (props) => {
  const propsD = props.data;
  const isFormF = (data) => props.changeIsForm(data);
  const isForm = props.isForm;
  const stub = props.stub;
  const errMsg = props.invalid;
  const classes = props.classes;
  const dis = !propsD[1].email || !propsD[1].pass
  const locale = useRouter().locale;

  const startAuth = (type) => {
    props.authStubOn();
    props.authSendApi(type, propsD[0]);
  };

  return (
    <>
      <h2 className={s.title}>{locale === 'ru' ? 'Авторизация' : 'Авторизація'}</h2>
      <EmailInput data={propsD}/>
      <PassInput data={propsD} isForm={isForm}/>
      {errMsg ? <span className={s.errMsg}>{errMsg}</span> : null}
      <ButtonInput dataV={propsD[1]} isForm={isForm} classes={classes} stub={stub} startAuth={startAuth}
                   name={locale === 'ru' ? 'Авторизоваться' : 'Авторизуватися'} disabled={dis}/>
      <div className={s.secLoginMenu}>
        <span onClick={() => isFormF("V")}>{locale === 'ru' ? 'Восстановить' : 'Відновити'}</span>
        <span onClick={() => isFormF("R")}>{locale === 'ru' ? 'Зарегистрироватся' : 'Зареєструватись'}</span>
      </div>
    </>
  )

}
const mapStateToProps = (state) => {
  return {
    isForm: state.auth.isForm,
    stub: state.auth.stub,
    invalid: state.auth.invalid,
    token: state.auth.token,
  };
};

export const LogForm = connect(mapStateToProps, {
  changeIsForm,
  authStubOn,
  authSendApi,
})(LogFor);