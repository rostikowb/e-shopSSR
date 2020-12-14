import React from "react";
import Head from 'next/head'
import {Info} from "../../components/pages/info/info";

const info = () => {
  return (
    <>
      <Head>
        <title>vsivuha.online - О нас</title>
        {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
      </Head>
      <Info/>
    </>
  )
};

export default info;
