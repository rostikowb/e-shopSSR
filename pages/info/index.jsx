import React from "react";
import Head from 'next/head'
import {Info} from "../../components/pages/info/info";
import {useRouter} from "next/router";

const info = () => {
  const loc = useRouter()
  console.log(loc);
  return (
    <>
      <Head>
        <title>vsivuha.online - Информация</title>
        {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
      </Head>
      <Info/>
    </>
  )
};

export default info;
