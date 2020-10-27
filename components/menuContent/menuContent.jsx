import React from "react";
import s from "./menuContent.module.css";
import { Auth } from "./auth/auth";
import { Logo } from "./logo/logo";
import { Info } from "./info/info";
import { FilterBox } from "./filter/filter";
import { connect } from "react-redux";
import { FeedbackBtn } from "./feedbackBtn/feedbackBtn";
import { Sort } from "../dopComp/upperBar/sort/sort";
import { UserCabinet } from "./userCabinet/userCabinet";
import {useRouter} from "next/router";

export const menuConten = (props) => {
    const loc = useRouter().pathname.split('/')

    console.log(loc);
    return (
    <div className={s.mainMenuBox}>
      <Logo />
      {!props.token ? <Auth /> : <UserCabinet />}
      <Info defOpen={loc[1]} />
      <FilterBox defOpen={loc}  />
      <div className={s.sortInMenu}>
        <span>Сортировать по:</span>
        <Sort />
      </div>
      <FeedbackBtn />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const menuContent = connect(mapStateToProps)(menuConten);
