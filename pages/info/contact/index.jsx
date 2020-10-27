import React from "react";
import Head from 'next/head'
import {checkoutFormTheme} from "../../../styles/theme";
import {Contact} from "../../../components/pages/info/contact/contact";

const contact = () => {
    return (
        <>
            <Head>
                <title>I'am Misix</title>
                {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
            </Head>

            <Contact/>
        </>
    )
};

export default contact;


export async function getServerSideProps(context) {

    // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {

    // const reduxStore = initializeStore();

    return {props: {
            // initialReduxState: reduxStore.getState()
            },
    }
    // } else {
    //     return {props: {}}
    // }
}