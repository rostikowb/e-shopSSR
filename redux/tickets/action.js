import { TICKET_SEND, TICKET_STUB } from "../types";
import { option } from "../../option";
import bent from "bent";

export const sendTicket = (obj, token) => {
  return async (dispatch) => {
    dispatch({ type: TICKET_STUB });
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )("/ticket/create", obj, {
      authorization: token,
    });

    dispatch({
      type: TICKET_SEND,
      invalid: res["invalid"],
      msg: res["msg"],
    });
  };
};
