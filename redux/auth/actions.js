import {
  AUTH_API,
  AUTH_EXIT,
  AUTH_STUB,
  AUTH_UPDATE,
  FORM_CHANGE,
} from "../types";
import {req} from "../req";
import {switchRepassStep} from "./lib/switchRepassStep";

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
  const path = `/users/${type}`;
  const body = {
    FN: data.name,
    email: data.email,
    pass: data.pass,
  }
  return async (dispatch) => {
    const res = await req(path, {body});

    dispatch({
      type: AUTH_API,
      payload: res,
      userData: res.UD,
    });
  };
};

export const rePassSendApi = (data, step) => {
  const {email, pass, pin} = data
  const {path, types} = switchRepassStep(step)

  return async (dispatch) => {
    const res = await req("/users/" + path, {body: {email, pass, pin}});

    dispatch({
      type: types,
      payload: res,
      userData: res.UD,
      step,
    });
  };
};

export const authUpdateUD = (token) => {
  const header = {authorization: token}
  return async (dispatch) => {
    const res = await req("/users/read", {header});
    dispatch({
      type: AUTH_UPDATE,
      payload: res,
    });
  };
};
