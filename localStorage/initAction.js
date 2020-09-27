import {AUTH_INIT, LB_INIT, VISIT_INIT} from "../redux/types";

export const lsToStore = () => {
    return (dispatch) => {
        dispatch({type:LB_INIT});
        dispatch({type:AUTH_INIT});
        dispatch({type:VISIT_INIT});
    }
};