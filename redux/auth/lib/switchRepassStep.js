import {AUTH_API, RESTORE_PASS} from "../../types";

export const switchRepassStep = (step) => {
  switch (step) {
    case 0:
      return {
        path: 'restore0',
        types: RESTORE_PASS
      }
    case 1:
      return {
        path: 'restore1',
        types: RESTORE_PASS
      }
    case 2:
      return {
        path: 'restore2',
        types:  AUTH_API
      }
  }
}