import React from "react";
import {Checkout} from "../../components/pages/checkout/checkout";
import {initializeStore} from "../../redux/store";
import Head from "next/head";

const checkout = () => {
  return (
    <>
      <Head>
          <title>vsivuha - оформление заказа</title>
          {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
      </Head>
      <Checkout/>
    </>
  )
};

export default checkout;


export async function getServerSideProps(context) {

  const reduxStore = initializeStore();

  return {
    props: {
      initialReduxState: reduxStore.getState()
    },
  }

}