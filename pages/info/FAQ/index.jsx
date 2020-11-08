import React from "react";
import Head from 'next/head'
import {checkoutFormTheme} from "../../../styles/theme";
import {FAQ} from "../../../components/pages/info/FAQ/FAQ"

const faq = () => {
    return (
        <>
            <Head>
                <title>I'am Misix</title>
                {/*<meta name="theme-color" content={checkoutFormTheme} />*/}
            </Head>
            <FAQ/>
        </>
    )
};

export default faq;


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