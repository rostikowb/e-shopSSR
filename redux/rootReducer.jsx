import {combineReducers} from "redux";
import {modal} from "./modal/reducer";
import {AllGoodsR} from "./goodsArr/reducer";
import {oneGoods} from "./oneGoods/reducer";
import {addLikesBasket} from "./likesBasket/reducer";
import {auth} from "./auth/reducer";
import {checkout} from "./checkout/reducer";
import {ticket} from "./tickets/reducer";
import {filters} from "./filters/reducer";

export default combineReducers({
  modal,
  oneGoods,
  AllGoodsR,
  addLikesBasket,
  auth,
  checkout,
  ticket,
  filters
});
