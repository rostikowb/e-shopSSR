import React from "react";
import Head from 'next/head'

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px'
}

const Error404 = () => {
  return (
    <>
      <Head>
        <title>I'am Misix</title>
        {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
      </Head>
      <div style={style}>
        <h1>404 - Страница не найдена</h1>
      </div>
    </>
  )
};

export default Error404;