import React, {useEffect} from "react";
import s from "./checkout.module.css";
import { NoSsr } from '@material-ui/core';
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../redux/modal/actions";
import { CheckoutForm } from "./form/form";
import { CheckoutInfo } from "./info/info";
import {lsToStore} from "../../../localStorage/initAction";
import {useRouter} from "next/router";

const Checkou = (props) => {
  // const loc = useRouter()

    useEffect(()=>{
        props.lsToStore()
      // console.log(props.basketArr);
      // if(!props.basketArr?.length) loc.push('/', '/')
        // const jssStyles = document.querySelector('#jss-server-side');
        // console.log('jssStylespropspropspropsprops',jssStyles);
    },[])

  return (
    <>
      <div className={`main ${s.wrapper}`}>
        <div className={s.content}>
            <NoSsr><CheckoutForm />
          <CheckoutInfo /></NoSsr>
        </div>
      </div>
    </>
  );
};

// Зробить систему купонів на клієнті!!!!

const mapStateToProps = (state) => {
  return {
    basketArr: state.addLikesBasket.basketArr
  }
}
export const Checkout = connect(mapStateToProps, {
  changeStateAuthModal,
    lsToStore,
})(Checkou);