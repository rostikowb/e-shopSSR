import { TICKET_DONE, TICKET_SEND, TICKET_STUB } from "../types";

const initialState = {
  stub: false,
  errMsg: false,
  doneMsg: false,
};

export const ticket = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_STUB:
      state.stub = !state.stub;
      state.errMsg = false;
      return { ...state };

    case TICKET_SEND:
      if (action.invalid) {
        state.errMsg = action.msg;
      } else {
        state.doneMsg = true;
      }
      state.stub = !state.stub;
      return { ...state };

    case TICKET_DONE:
      state.doneMsg = false;
      state.errMsg = false;
      return { ...state };

    default:
      return state;
  }
};
