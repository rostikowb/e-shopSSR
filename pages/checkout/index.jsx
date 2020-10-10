import React from "react";
import {Checkout} from "../../components/pages/checkout/checkout";
import {initializeStore} from "../../redux/store";
import {fetchGoodsSSR} from "../../redux/goodsArr/actions";
import {FETCH_GOODS} from "../../redux/types";
import Head from 'next/head'
import {checkoutFormTheme} from "../../styles/theme";

const checkout = () => {
    return (
        <>
            <Head>
                <title>I'am Misix</title>
                <meta name="theme-color" content={checkoutFormTheme} />
            </Head>
        <Checkout/>
        </>
    )
};

export default checkout;


export async function getServerSideProps(context) {

    // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {

    const reduxStore = initializeStore();

    return {props: {
        initialReduxState: reduxStore.getState()},
    }
    // } else {
    //     return {props: {}}
    // }
}