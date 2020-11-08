import React from "react";
import Head from 'next/head'
import {checkoutFormTheme} from "../../../styles/theme";
import {Licagr} from "../../../components/pages/info/licagr/licagr";

const licagr = () => {
    return (
        <>
            <Head>
                <title>I'am Misix</title>
                {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
            </Head>
            <Licagr/>
        </>
    )
};

export default licagr;


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