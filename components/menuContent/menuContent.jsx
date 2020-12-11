import React from "react";
import s from "./menuContent.module.css";
import {Auth} from "./auth/auth";
import {Logo} from "./logo/logo";
import {Info} from "./info/info";
import {FilterBox} from "./filter/filter";
import {connect} from "react-redux";
import {FeedbackBtn} from "./feedbackBtn/feedbackBtn";
import {UserCabinet} from "./userCabinet/userCabinet";
import {useRouter} from "next/router";
import {SortM} from "./sortM/sortM";


export const menuConten = (props) => {
  const loc = useRouter()
  const locS = loc.pathname.split('/')
  const isCatalog = loc.pathname === '/goods/[catalog]'

  return (
    <div className={s.mainMenuBox}>
      <Logo/>
      <div className={s.auth}>{!props.token ? <Auth/> : <UserCabinet/>}</div>
      <Info defOpen={locS}/>


      {SortM(loc)}

      {isCatalog ? <FilterBox defOpen={loc}/> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const menuContent = connect(mapStateToProps)(menuConten);
