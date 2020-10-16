import React from "react";
import s from "../login.module.css";
import {EmailInput} from "../inputs/email";
import {PassInput} from "../inputs/pass";
import {ButtonInput} from "../inputs/button";
import {connect} from "react-redux";
import {authStubOn, changeIsForm, rePassSendApi} from "../../../../redux/auth/actions";
import {PinInput} from "../inputs/pin";

export const ResFor = (props) => {
    const step = props.step;
    const propsD = props.data;
    const isFormF = (data) => props.changeIsForm(data);
    const isForm = props.isForm;
    const stub = props.stub;
    const errMsg = props.invalid;
    const classes = props.classes;

    const startAuth = () => {
        if(step < 3){
            props.authStubOn();
            props.rePassSendApi(propsD[0], step);
        }
    };
    console.log(step);
    return (
        <>
            <h2 className={s.title}>Востановление пароля</h2>

            {step===0?<div className={s.steps}>Шаг 1: Введите email к которому нужно востановить доступ</div>:null}
            {step===1?<div className={s.steps}>Шаг 2: Введите полученый на почту 6-значный пин-код</div>:null}
            {step===2?<div className={s.steps}>Шаг 3: Придумайте новый пароль</div>:null}

            <EmailInput data={propsD}/>
            {step===1||step===2?<PinInput data={propsD}/>:null}
            {step===2?<PassInput data={propsD} isForm={isForm} newPass={true}/>:null}

            {errMsg ? <span className={s.errMsg}>{errMsg}</span> : null}
            {step===0?<ButtonInput dataV={propsD[1]} isForm={isForm} classes={classes} stub={stub} startAuth={startAuth} name={"Востановить"} disabled={!propsD[1].email}/> :null}
            {step===1?<ButtonInput dataV={propsD[1]} isForm={isForm} classes={classes} stub={stub} startAuth={startAuth} name={"Проверить код"} disabled={!propsD[1].pin}/> :null}
            {step===2?<ButtonInput dataV={propsD[1]} isForm={isForm} classes={classes} stub={stub} startAuth={startAuth} name={"Утвердить пароль"} disabled={!propsD[1].pass}/> :null}

            <div className={s.secLoginMenu}>
                <span onClick={() => isFormF("R")}>Создать аккаунт</span>
                <span onClick={() => isFormF("L")}>Вспомнил пароль</span>
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
        step: state.auth.rePassStep,
    };
};

export const ResForm = connect(mapStateToProps, {
    changeIsForm,
    authStubOn,
    rePassSendApi,
})(ResFor);