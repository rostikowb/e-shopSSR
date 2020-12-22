import {TICKET_SEND, TICKET_STUB} from "../types";
import {req} from "../req";

export const sendTicket = (obj, token) => {
  return async (dispatch) => {
    dispatch({type: TICKET_STUB});
    let res = await req("/ticket/create", {body: obj, header: {authorization: token}});

    dispatch({
      type: TICKET_SEND,
      invalid: res["invalid"],
      msg: res["msg"],
    });
  };
};
