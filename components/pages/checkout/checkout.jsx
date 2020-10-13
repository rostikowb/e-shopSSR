import React, {useEffect} from "react";
import s from "./checkout.module.css";
import Link from 'next/link';
import { NoSsr } from '@material-ui/core';
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../redux/modal/actions";
import { CheckoutForm } from "./form/form";
import { CheckoutInfo } from "./info/info";
import {lsToStore} from "../../../localStorage/initAction";

const Checkou = (props) => {

    useEffect(()=>{
        props.lsToStore()
        // const jssStyles = document.querySelector('#jss-server-side');
        // console.log('jssStylespropspropspropsprops',jssStyles);
    },[])

  return (
    <>
      <header className={s.header}>
        <div className={s.headerWrapper}>
            <Link href={`/`} as={`/`} passHref><a>Вернутся на главную</a></Link>
          <Link href={`/`} as={`/`} passHref><a>Контакты</a></Link>
        </div>
      </header>
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

export const Checkout = connect(null, {
  changeStateAuthModal,
    lsToStore,
})(Checkou);