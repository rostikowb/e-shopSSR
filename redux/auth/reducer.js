import {
    AUTH_API, AUTH_CLEAR_MSG,
    AUTH_EXIT,
    AUTH_INIT,
    AUTH_STUB,
    AUTH_UPDATE,
    AUTH_USERAGENT,
    FORM_CHANGE, RESTORE_PASS,
    UD_COMMENT,
} from "../types";
import {get, set} from "../../localStorage/localStorFunc";

// let user = get("auth/userData") || set("auth/userData", "");
// let token = get("auth/token") || set("auth/token", "");

let initialState = {
    auth: false,
    isForm: "L",
    stub: false,
    invalid: false,
    token: null,
    userAgent: null,
    userData: null,
    rePassStep: 0
    // userData: {
    //   email: user?.email,
    //   tel: user?.tel,
    //   FN: user?.FN,
    //   LN: user?.LN,
    //   SN: user?.SN,
    //   city: user?.city,
    //   branchN: user?.branchN,
    //   boughtArr: user?.boughtArr,
    //   cupon: user?.cupon,
    // },
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_INIT:
            if (!state.token) state.token = get("auth/token");
            if (!state.userData) state.userData = get("auth/userData");
            return {...state};

        case FORM_CHANGE:
            state.isForm = action.form;
            return {...state};

        case AUTH_USERAGENT:
            state.userAgent = action.userAgent;
            return {...state};

        case AUTH_API:
            if (action.payload?.invalid) {
                state.invalid = action.payload?.message ||action.payload?.msg;
            } else {
                state.invalid = false;
                if (action.payload?.token) {
                    state.token = action.payload.token;
                    set("auth/token", action.payload.token);
                }
                if (action.userData) {
                    state.userData = action.userData;
                    set("auth/userData", state.userData);
                }
                state.rePassStep = 0
            }
            return {...state};


        case RESTORE_PASS:
            if (action.payload?.invalid){
                state.invalid = action.payload.msg;
            }else if(action.step < 3){
                state.invalid = null;
                state.rePassStep = action.step + 1;
            }

            return {...state};

        case AUTH_UPDATE:
            if (action.payload?.UD) {
                state.userData = action.payload.UD;
                set("auth/userData", state.userData);
            }
            return {...state};

        case AUTH_STUB:
            state.auth = !state.auth;
            return {...state};

        case AUTH_CLEAR_MSG:
            state.invalid = false;
            return {...state};

        case UD_COMMENT:
            state.userData.boughtArr[action.bIndex].goods[
                action.gIndex
                ].comment = true;
            set("auth/userData", state.userData);
            return {...state};

        case AUTH_EXIT:
            set("auth/token", "");
            set("auth/userData", "");
            state.userData = {};
            state.token = "";
            return {...state};

        default:
            return state;
    }
};
