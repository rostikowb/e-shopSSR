import {
    AUTH_API,
    AUTH_EXIT,
    AUTH_STUB,
    AUTH_UPDATE,
    FORM_CHANGE, RESTORE_PASS,
} from "../types";
import bent from "bent";
import {option} from "../../option";

export const changeIsForm = (form) => {
    return (dispatch) => {
        dispatch({
            type: FORM_CHANGE,
            form: form,
        });
    };
};

export const authStubOn = () => {
    return (dispatch) => {
        dispatch({
            type: AUTH_STUB,
        });
    };
};
export const authExit = () => {
    return (dispatch) => {
        dispatch({
            type: AUTH_EXIT,
        });
    };
};

export const authSendApi = (type, data) => {
    return async (dispatch) => {
        const res = await bent(
            option.api,
            "string",
            "POST",
            "json",
            200
        )("/users/" + type, {
            FN: data.name,
            email: data.email,
            pass: data.pass,
        });

        console.log(res);
        dispatch({
            type: AUTH_API,
            payload: res,
            userData: res.UD,
        });
    };
};

export const rePassSendApi = (data, step) => {

    let types = RESTORE_PASS;
    let path = 'restore0'
    console.log(step);
    if (step === 1)
        path = 'restore1'

    if (step === 2) {
        types = AUTH_API;
        path = 'restore2'
    }

    return async (dispatch) => {
        const res = await bent(
            option.api,
            "string",
            "POST",
            "json",
            200
        )("/users/" + path, {
            email: data.email,
            pass: data.pass,
            pin: data.pin,
        });

        console.log(res);
        dispatch({
            type: types,
            payload: res,
            userData: res.UD,
            step,
        });
    };
};

export const authUpdateUD = (token) => {
    return async (dispatch) => {
        const res = await bent(
            option.api,
            "string",
            "POST",
            "json",
            200
        )("/users/read", {}, {authorization: token});
        // console.log(res);
        dispatch({
            type: AUTH_UPDATE,
            payload: res,
        });
    };
};
