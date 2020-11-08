import React from "react";
import Head from 'next/head'
import {checkoutFormTheme} from "../../../styles/theme";
import {Return} from "../../../components/pages/info/return/return";

const ReturN = () => {
    return (
        <>
            <Head>
                <title>I'am Misix</title>
                {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
            </Head>
            <Return/>
        </>
    )
};

export default ReturN;


// export async function getServerSideProps(context) {
//
//     // if (!(option.DOMENREGEX.test(context.req.headers.referer))) {
//
//     // const reduxStore = initializeStore();
//
//     return {props: {
//             // initialReduxState: reduxStore.getState()
//             },
//     }
//     // } else {
//     //     return {props: {}}
//     // }
// }